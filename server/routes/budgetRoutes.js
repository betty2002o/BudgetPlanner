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

// POST a new budget
router.post("/", async (req, res) => {
  try {
    const { date, description, category, amount } = req.body;

    if (!date || !description || amount == null) {
      return res
        .status(400)
        .json({ error: "Date, description, and amount are required" });
    }

    const newBudget = new Budget({ date, description, category, amount });
    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - replace entire budget entry
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { date, description, category, amount } = req.body;

  if (!date || !description || amount == null) {
    return res
      .status(400)
      .json({ error: "Date, description, and amount are required" });
  }

  try {
    const updatedBudget = await Budget.findByIdAndUpdate(
      id,
      { date, description, category, amount },
      { new: true, runValidators: true }
    );

    if (!updatedBudget) {
      return res.status(404).json({ error: "Budget not found" });
    }

    res.json(updatedBudget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - remove budget entry
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBudget = await Budget.findByIdAndDelete(id);

    if (!deletedBudget) {
      return res.status(404).json({ error: "Budget not found" });
    }

    res.json({ message: "Budget deleted successfully", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
