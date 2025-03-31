// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public numbers;

    function setNumber(uint256 newNumber) public {
        numbers = newNumber;
    }

    function increment() public {
        numbers++;
    }
}
