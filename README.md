# Personal Budget Planner

A web application to manage your personal finances including daily expenses, monthly budgets, and bills. Provides visual insights with summaries, graphs, and category breakdowns.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Features](#features)

---

## Prerequisites

- Node.js & npm installed
- MongoDB running locally or via [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a `.env` file in `/server` folder with:

```env
MONGO_URI=your_connection_string
PORT=5000
```

## project-structure

root
├── client/ (React + Vite frontend)
└── server/ (Express backend)

## Installation

# Install frontend dependencies

cd client
npm install

# Install backend dependencies

cd ../server
npm install

## Running the Application

From the server folder, run frontend and backend concurrently:
npm run dev:all

## Features

Dashboard

    Displays current month financial overview.

    Quick access to spent, income, savings, and bill stats.

    Shows remaining budget for the current month.

Monthly Summary

    Detailed breakdown of budget, expenses, income, and bills.

    Category breakdown with table and graph.

    Shows Total Income, Total Expense, Paid Bills, Saving, Difference, and Balance Forward.

Daily Expense

    Add, edit, and delete daily expenses.

    Supports category-based tracking.

    Monthly Budget

    Allocate budgets per category.

Bills

    Add, edit, and delete bills.

    Mark bills as Paid or Unpaid.

    Paid bills included in monthly summary calculations.

    Displays Total (sum of all bills) and Owed (unpaid amount).

Navigation

    Mobile-first design using a hamburger menu.

    Navigate between Dashboard, Monthly Summary, Daily Expense, Budget, and Bills.

Footer

    Fixed at the bottom of the page.

    Quick link to Documentation page.
