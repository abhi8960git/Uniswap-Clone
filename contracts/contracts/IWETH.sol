// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.7.0 < 0.9.0 ;

interface IWETH {
    function deposit() external payable;

    function transfer(address recipient, uint256 amount) external returns (bool);

    function withdraw(uint256) external;

    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function allowance(address spender, uint amount) external returns( bool);

    function approve(address spender , uint amount) external returns(bool);

    function transferFrom(address sender , address recipient, uint amount) external returns(bool);

    // Events 

    event Transfer(address indexed from , address indexed to , uint value);
    event Approve(address indexed owner, address indexed spender, uint value);

}