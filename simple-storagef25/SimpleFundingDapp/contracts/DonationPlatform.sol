// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DonationPlatform {
    address public owner;

    event DonationReceived(address indexed donor, uint256 amount);
    event FundsWithdrawn(uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        emit DonationReceived(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(owner).transfer(balance);
        emit FundsWithdrawn(balance);
    }
}
