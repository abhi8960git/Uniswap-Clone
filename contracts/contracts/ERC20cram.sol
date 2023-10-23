// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.7.0 < 0.9.0 ;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CramToken  is ERC20 {
    constructor() ERC20("Cram","EX") {
        // Constructor code here
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    // Add your functions and state variables below this line

}