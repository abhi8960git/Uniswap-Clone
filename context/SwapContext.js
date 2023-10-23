import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

import {
  CramTokenContract,
  DAIContract,
  IWETHContract,
  MineTokenContract,
  MultiHopTokenContract,
  SingleSwapContract,
  checkIfWalletConnected,
  connectWallet,
} from "../utils/appFeature";
import { IWETHAbi, IWETHAddress } from "./constant";
const addToken = [
  "0xa4A7264c8Cc9d4b429D148823997063aae94993B",
  "0x9f4924686E8a59A2b409cBd74F47071f900F6cB6",

];

import ERC20 from "../utils/ERC20Cram.json";

export const SwapTokenContext = React.createContext();
export const SwapContextProvider = ({ children }) => {
  // useSTAtes

  const [tokenData, setTokenDatt] = useState([]);
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dia, setDia] = useState("");
  const [ether, setEther] = useState("");
  // var tokenData;
  const [account, setAccount] = useState("");

  const FetchData = async () => {
    try {
      const account = await checkIfWalletConnected();
      setAccount(account);  
      // provider
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      console.log(connection);
      //   console.log(connect);
      const provider = new ethers.providers.Web3Provider(connection);
      //   Check balance
      const balance = await provider.getBalance(account);
      const convertBalance = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(convertBalance);
      setEther(ethValue);
      console.log(ethValue);

      addToken.map(async (el, i) => {
        const contract = new ethers.Contract(el, ERC20, provider);
        // console.log(contract);
        // fetch balance
        const userBalance = await contract.balanceOf(account);
        const convertBalance = BigNumber.from(userBalance).toString();
      
        const symbol = await contract.symbol();
        const name = await contract.name();
        // console.log(name, symbol);

        tokenData.push({
          name: name,
          symbol: symbol,
          tokenBalance: convertBalance,
        });


        // console.log("this is swap context tokenData", tokenData);

     
        const weth = await IWETHContract();
        const wethbal = await weth.balanceOf(account);
        console.log(wethbal);
        const wethToken = BigNumber.from(wethbal).toString();
        const convertWethTokenBal = ethers.utils.formatEther(wethToken);
        setWeth9(convertWethTokenBal);
        
        console.log("this is weth", weth9);

         
        const Dai = await DAIContract();
        const daibal = await weth.balanceOf(account);
        console.log(daibal);
        const daiToken = BigNumber.from(daibal).toString();
        const convertDaiTokenBal = ethers.utils.formatEther(daiToken);
        setDia(convertDaiTokenBal);
        
        console.log("this is dai", weth9);

       
     

        // connectNetwrok

        const network = await provider.getNetwork();
        setNetworkConnect(network);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <SwapTokenContext.Provider value={{account,tokenData, weth9, dia, networkConnect, ether}}>
      {children}
    </SwapTokenContext.Provider>
  );
};
