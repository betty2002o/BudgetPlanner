import express from "express";
import Budget from "../models/Budget.js";

const router = express.Router();

// GET all budget
router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
