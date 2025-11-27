// // // import express from "express";
// // // import mongoose from "mongoose";
// // // import cors from "cors";
// // // import dotenv from "dotenv";
// // // import expenseRoutes from "./routes/expenseRoutes.js";
// // // import budgetRoutes from "./routes/budgetRoutes.js";
// // // import billRoutes from "./routes/billRoutes.js";

// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors());

// // // // MongoDB Connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(() => console.log("✅ MongoDB connected"))
// // //   .catch((err) => console.error("❌ MongoDB error:", err));

// // // app.use("/api/expenses", expenseRoutes);
// // // app.use("/api/budgets", budgetRoutes);
// // // app.use("/api/bills", billRoutes);

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import path from "path";
// // import { fileURLToPath } from "url";

// // // Routes
// // import expenseRoutes from "./routes/expenseRoutes.js";
// // import budgetRoutes from "./routes/budgetRoutes.js";
// // import billRoutes from "./routes/billRoutes.js";

// // dotenv.config();
// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // MongoDB connection
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.error("❌ MongoDB error:", err));

// // // API routes
// // app.use("/api/expenses", expenseRoutes);
// // app.use("/api/budgets", budgetRoutes);
// // app.use("/api/bills", billRoutes);

// // // Serve React build for production
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "../client/dist")));

// //   // React SPA catch-all
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// //   });
// // }

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // server/server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // Import routes
// import expenseRoutes from "./routes/expenseRoutes.js";
// import budgetRoutes from "./routes/budgetRoutes.js";
// import billRoutes from "./routes/billRoutes.js";

// // Load .env only in development
// if (process.env.NODE_ENV !== "production") {
//   dotenv.config();
// }

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // API routes
// app.use("/api/expenses", expenseRoutes);
// app.use("/api/budgets", budgetRoutes);
// app.use("/api/bills", billRoutes);

// // Serve React front-end in production
// if (process.env.NODE_ENV === "production") {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   app.use(express.static(path.join(__dirname, "../client/dist")));

//   // React catch-all (must be last)
//   app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
//   });
// }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import expenseRoutes from "./routes/expenseRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import billRoutes from "./routes/billRoutes.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use("/api/expenses", expenseRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/bills", billRoutes);

// Serve React in production
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.static(path.join(__dirname, "../client/dist")));

  // React SPA catch-all
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
