# QA Web3 - Transaction Verifier

This QA automation script checks the on-chain status of a transaction using its hash. It connects to an Ethereum-compatible RPC, retrieves the transaction and receipt, and verifies that it was successfully confirmed.

## 📊 Objective

- Confirm the existence of a transaction
- Retrieve its status (`Success` or `Failed`)
- Log key details (sender, recipient, block number)
- Useful for validating on-chain actions in test scenarios

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qa-web3-tx-verifier.git
cd qa-web3-tx-verifier
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
TX_HASH=0xYourTransactionHashHere
```

4. Run the script:

```bash
node qa-web3-tx-verifier.js
```

## 📊 Sample Output

```
✅ Transaction found:
  Hash: 0xabc...
  From: 0x...
  To: 0x...
  Status: Success
  Block: 18400234
```

## 🧐 About

This project is part of a QA Web3 portfolio by Raúl Casado (GaslessQA), focused on validating decentralized system behaviors through smart automation.

## 📃 Author

**Raúl Casado – GaslessQA**  
🔗 [https://www.linkedin.com/in/gaslessqa/](https://www.linkedin.com/in/gaslessqa/)

## 📚 License

MIT
