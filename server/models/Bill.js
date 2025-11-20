import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  amount: {
    type: Number,
    required: true,
    min: [0, "Amount cannot be negative"],
  },
  paid: { type: Boolean, default: false },
});
export default mongoose.model("Bill", billSchema);
