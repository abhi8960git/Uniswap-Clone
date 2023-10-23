// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.7.0 < 0.9.0 ;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 contract MineToken is ERC20 {
     constructor() ERC20("Mine", "MX") {
         // Constructor code here
         _mint(msg.sender, 100000 * 10 ** decimals());
     }
 
     // Add your functions and state variables below this line
 
 }