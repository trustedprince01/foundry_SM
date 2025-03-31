<<<<<<< HEAD
Solidity Smart Contract Journey 🛠️
About This Repository
Hey there! 👋 Welcome to my Solidity Smart Contract Journey repository.
This is where I document everything I’m learning about smart contract development using Solidity, Foundry, and Vyper.

What You'll Find Here
📌 Beginner Solidity Projects – My first steps into smart contracts.
📌 Advanced Solidity Concepts – Exploring gas optimization, security, and best practices.
📌 Foundry & Vyper – Experimenting with different frameworks.
📌 Real-World Smart Contracts – Practical projects that simulate real blockchain use cases.

Why I Created This Repo
I'm learning blockchain development and wanted to keep track of my progress while sharing it with others.
If you're also on this journey, feel free to check out my code, give feedback, or contribute! 🚀

Follow My Journey
🔹 GitHub Contributions – I push updates daily to stay active.
🔹 Learning Resources – Notes and explanations to help beginners.
🔹 Open to Collaboration – If you have ideas, let’s build together!

Connect With Me
🐦 Twitter: @jokerelon
📧 Email: check git

=======
## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
>>>>>>> 7bbb773 (chore: forge init)
