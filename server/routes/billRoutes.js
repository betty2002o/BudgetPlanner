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

export default router;
