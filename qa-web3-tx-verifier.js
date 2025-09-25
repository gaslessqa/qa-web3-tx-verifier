// QA Web3 - Transaction Verifier
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

async function verifyTransaction() {
  const txHash = process.env.TX_HASH;
  const rpcUrl = process.env.RPC_URL;

  if (!txHash || !rpcUrl) {
    console.error("❌ Missing TX_HASH or RPC_URL in environment variables.");
    return;
  }

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  try {
    const tx = await provider.getTransaction(txHash);
    if (!tx) throw new Error("Transaction not found");

    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt) throw new Error("Receipt not available yet");

    const status = receipt.status === 1 ? "Success" : "Failed";
    console.log("✅ Transaction found:");
    console.log("  Hash:", tx.hash);
    console.log("  From:", tx.from);
    console.log("  To:", tx.to);
    console.log("  Status:", status);
    console.log("  Block:", receipt.blockNumber);
  } catch (error) {
    console.error("❌ Verification error:", error.message);
  }
}

verifyTransaction();
