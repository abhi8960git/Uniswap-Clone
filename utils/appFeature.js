import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  CramTokenAddress,
  CramAbi,
  MineTokenAddress,
  MineAbi,
  MultiHopAbi,
  MultiHopSwapAddress,
  SingleAbi,
  SingleSwapAddress,
  IWETHAbi,
  IWETHAddress,
  DAIAbi,
  DAIAddress
} from "@/context/constant";

// Check wallet is connected
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install metamask");
    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    const firstAccout = accounts[0];
    return firstAccout;
  } catch (error) {
    console.log(error);
  }
};

// Connect wallet

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install metamask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccout = accounts[0];
    return firstAccout;
  } catch (error) {
    console.log(error);
  }
};

// Get Contract
export const getContract = (signerOrProvider, address, abi) => {
  new ethers.Contract(address, abi, signerOrProvider);
};

// Connecting with cramToken
export const CramTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = getContract(signer, CramTokenAddress, CramAbi);
    console;
  } catch (error) {
    console.log(error);
  }
};

// MineToken

export const MineTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = getContract(signer, MineTokenAddress, MineAbi);
  } catch (error) {
    console.log(error);
  }
};

// MultiHop

export const MultiHopTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = getContract(signer, MultiHopSwapAddress, MultiHopAbi);
  } catch (error) {
    console.log(error);
  }
};

// Single Swap
export const SingleSwapContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = getContract(signer, SingleSwapAddress, SingleAbi);
  } catch (error) {
    console.log(error);
  }
};

// IWeth contract

export const IWETHContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(IWETHAddress, IWETHAbi, signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
// DAI contract

const DaiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

export const DAIContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DaiAddress,DAIAbi, signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
