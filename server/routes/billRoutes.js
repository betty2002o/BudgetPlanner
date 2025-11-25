import express from "express";
import Bill from "../models/Bill.js";

const router = express.Router();

// GET all budget
router.get("/", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new bill
router.post("/", async (req, res) => {
  try {
    const { date, description, category, amount, paid } = req.body;

    if (!date || !description || amount == null) {
      return res
        .status(400)
        .json({ error: "Date, description, and amount are required" });
    }

    const newBill = new Bill({
      date,
      description,
      category,
      amount,
      paid: paid ?? false, // default to false if not set
    });

    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - update full bill
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { date, description, category, amount, paid } = req.body;

  if (!date || !description || amount == null) {
    return res
      .status(400)
      .json({ error: "Date, description, and amount are required" });
  }

  try {
    const updatedBill = await Bill.findByIdAndUpdate(
      id,
      { date, description, category, amount, paid },
      { new: true, runValidators: true }
    );

    if (!updatedBill) {
      return res.status(404).json({ error: "Bill not found" });
    }

    res.json(updatedBill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - remove bill
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBill = await Bill.findByIdAndDelete(id);

    if (!deletedBill) {
      return res.status(404).json({ error: "Bill not found" });
    }

    res.json({ message: "Bill deleted successfully", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
