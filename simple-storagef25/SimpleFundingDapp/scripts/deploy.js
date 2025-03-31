const hre = require("hardhat");

async function main() {
    const DonationPlatform = await hre.ethers.getContractFactory("DonationPlatform");
    const donationPlatform = await DonationPlatform.deploy();
    await donationPlatform.waitForDeployment();

    console.log("Contract deployed to:", donationPlatform.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
