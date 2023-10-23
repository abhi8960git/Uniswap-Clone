
import CramTokenAbi from '../utils/ERC20Cram.json'
import MineTokenAbi from '../utils/ERC20mine.json' 
import SwapMultiHopAbi from '../utils/SwapMultiHop.json' 
import SwapTokenAbi from '../utils/SwapToken.json'
import IWETHabi from '../utils/IWETH.json'



// Addressses 
// SingleSwap: 0x830A231B9a275Cc9a42320373aA399c5408A893B
// SwapMutlihop: 0x753E0FC41cb761a7C94CefDbF13E10C7D305D0B9
// ERC20MIne : 0x9f4924686E8a59A2b409cBd74F47071f900F6cB6
// ERC20cram : 0xa4A7264c8Cc9d4b429D148823997063aae94993B


// CramToken
export const CramTokenAddress = "0xa4A7264c8Cc9d4b429D148823997063aae94993B"
export const CramAbi = CramTokenAbi;

// MineToken
export const MineTokenAddress = "0x9f4924686E8a59A2b409cBd74F47071f900F6cB6"
export const MineAbi=MineTokenAbi ;

// SingleSwapToken
export const SingleSwapAddress = "0x830A231B9a275Cc9a42320373aA399c5408A893B";
export const SingleAbi = SwapTokenAbi;

// MutliHopSwap

export const MultiHopSwapAddress= "0x753E0FC41cb761a7C94CefDbF13E10C7D305D0B9";
export const MultiHopAbi = SwapMultiHopAbi;

// iWETH

export const IWETHAbi = IWETHabi;
export const IWETHAddress = "0x2B77278636A67550108A4AE30b89401A9758A983";
// console.log("cram", CramAbi, "mine", MineAbi, "singleSwap", SingleAbi, "mutlihopSwap", MultiHopAbi)
// console.log(CramTokenAddress)

// Dai 

export const DAIAbi = IWETHAbi;
export const DAIAddress = "0x82fb927676b53b6eE07904780c7be9b4B50dB80b";
