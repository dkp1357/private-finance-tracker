"use client";

import { useState, useContext, useEffect } from "react";
import { financeContext } from "@/lib/store/finance-context";
import { authContext } from "@/lib/store/auth-context";
import { currencyFormatter } from "@/lib/utils";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";
import AddIncomeModal from "@/components/modals/AddIncomeModal";
import AddExpensesModal from "@/components/modals/AddExpensesModal";
import SignIn from "@/components/SignIn";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [balance, setBalance] = useState(0);

  const { expenses, income } = useContext(financeContext);
  const { user } = useContext(authContext);

  useEffect(() => {
    const newBalance =
      income.reduce((total, i) => total + i.amount, 0) -
      expenses.reduce((total, e) => total + e.total, 0);
    setBalance(newBalance);
  }, [expenses, income]);

  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      {/* Add Income Modal */}
      <AddIncomeModal show={showAddIncomeModal} onClose={setShowAddIncomeModal} />

      {/* Add Expenses Modal */}
      <AddExpensesModal show={showAddExpenseModal} onClose={setShowAddExpenseModal} />

      <main className="flex flex-col items-center min-h-screen py-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="w-full max-w-2xl px-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl text-white p-6">
          {/* Balance Section */}
          <section className="text-center">
            <p className="text-gray-300 text-md">My Balance</p>
            <h2 className="text-5xl font-bold">{currencyFormatter(balance)}</h2>
          </section>

          {/* Buttons Section */}
          <section className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setShowAddExpenseModal(true)}
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-pink-500 rounded-lg shadow-md hover:from-red-700 hover:to-pink-600 transition-all duration-300"
            >
              + Expenses
            </button>
            <button
              onClick={() => setShowAddIncomeModal(true)}
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg shadow-md hover:from-green-700 hover:to-emerald-600 transition-all duration-300"
            >
              + Income
            </button>
          </section>

          {/* Expenses Section */}
          <section className="mt-10">
            <h3 className="text-2xl font-semibold">My Expenses</h3>
            <div className="flex flex-col gap-4 mt-6">
              {expenses.length > 0 ? (
                expenses.map((expense) => (
                  <ExpenseCategoryItem key={expense.id} expense={expense} />
                ))
              ) : (
                <p className="text-gray-400">No expenses recorded yet.</p>
              )}
            </div>
          </section>

          {/* Chart Section */}
          <section className="mt-10 text-center">
            <h3 className="text-2xl font-semibold">Stats</h3>
            <div className="w-2/3 mx-auto mt-6">
              <Doughnut
                data={{
                  labels: expenses.map((expense) => expense.title),
                  datasets: [
                    {
                      label: "Expenses",
                      data: expenses.map((expense) => expense.total),
                      backgroundColor: expenses.map((expense) => expense.color),
                      borderColor: ["#18181b"],
                      borderWidth: 5,
                    },
                  ],
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
