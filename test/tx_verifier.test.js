// QA Web3 - Transaction Verifier Test with Jest
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

describe("Transaction Verification", () => {
  const rpcUrl = process.env.RPC_URL;
  const txHash = process.env.TX_HASH;
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  test("Transaction exists", async () => {
    const tx = await provider.getTransaction(txHash);
    expect(tx).toBeDefined();
    expect(tx.hash).toBe(txHash);
  });

  test("Transaction receipt is successful", async () => {
    const receipt = await provider.getTransactionReceipt(txHash);
    expect(receipt).toBeDefined();
    expect(receipt.status).toBe(1); // 1 means success
    expect(receipt.blockNumber).toBeGreaterThan(0);
  });
});
