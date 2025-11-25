import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new expense
router.post("/", async (req, res) => {
  try {
    const { date, description, category, amount } = req.body;

    if (!date || !description || amount == null) {
      return res
        .status(400)
        .json({ error: "Date, description, and amount are required" });
    }

    const newExpense = new Expense({
      date,
      description,
      category,
      amount,
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - replace entire expense
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { date, description, category, amount } = req.body;

  if (!date || !description || !amount) {
    return res
      .status(400)
      .json({ error: "date, description, and amount are required" });
  }

  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { date, description, category, amount },
      { new: true, runValidators: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE an expense
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully", deletedExpense });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
