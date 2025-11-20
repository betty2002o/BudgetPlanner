import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  amount: {
    type: Number,
    required: true,
    min: [0, "Amount cannot be negative"],
  },
});

export default mongoose.model("Expense", expenseSchema);
