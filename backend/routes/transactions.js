const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.post("/", async (req, res) => {
  const transaction = new Transaction(req.body);
  const saved = await transaction.save();
  res.json(saved);
});

router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

module.exports = router;