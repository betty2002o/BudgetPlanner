import mongoose from "mongoose";
import dotenv from "dotenv";
import Expense from "./models/Expense.js";
import Budget from "./models/Budget.js";
import Bill from "./models/Bill.js";

dotenv.config();

const dummyExpenses = [
  {
    date: "2025-01-01",
    description: "Groceries",
    category: "Food",
    amount: 50,
  },
  { date: "2025-01-02", description: "Gas", category: "Transport", amount: 40 },
];

const dummyBudgets = [
  {
    date: "2025-01-01",
    description: "Salary",
    category: "Income",
    amount: 3000,
    paid: true,
  },
  {
    date: "2025-01-05",
    description: "Emergency Fund",
    category: "Saving",
    amount: 500,
    paid: false,
  },
];

const dummyBills = [
  { date: "2025-01-03", description: "Electricity", amount: 120, paid: true },
  { date: "2025-01-04", description: "Internet", amount: 60, paid: false },
];

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Clear existing data
    await Expense.deleteMany();
    await Budget.deleteMany();
    await Bill.deleteMany();
    console.log("🗑 Cleared old data");

    // Insert dummy data
    const insertedExpenses = await Expense.insertMany(dummyExpenses);
    const insertedBudgets = await Budget.insertMany(dummyBudgets);
    const insertedBills = await Bill.insertMany(dummyBills);

    console.log("🚀 Dummy Expenses inserted:", insertedExpenses);
    console.log("🚀 Dummy Budgets inserted:", insertedBudgets);
    console.log("🚀 Dummy Bills inserted:", insertedBills);

    mongoose.connection.close();
    console.log("🔌 Database connection closed");
  } catch (error) {
    console.error("❌ Error inserting dummy data:", error);
    process.exit(1);
  }
};

start();
