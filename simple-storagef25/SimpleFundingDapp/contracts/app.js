const contractAddress = "0x629b30addcbf0b72edc43fdf82da8e308d5d2e64"; // Replace with your actual contract address
const abi = [
    {
        "inputs": [],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

let signer, contract;

async function connectWallet() {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        document.getElementById("wallet-address").innerText = `Connected: ${await signer.getAddress()}`;
        contract = new ethers.Contract(contractAddress, abi, signer);
    } else {
        alert("Metamask not detected!");
    }
}

async function donate() {
    if (!contract) return alert("Connect wallet first!");

    const tx = await contract.donate({ value: ethers.parseEther("0.1") });
    await tx.wait();
    alert("Donation successful!");
}

async function getBalance() {
    if (!contract) return alert("Connect wallet first!");

    const balance = await contract.getBalance();
    document.getElementById("contract-balance").innerText = `Contract Balance: ${ethers.formatEther(balance)} ETH`;
}
