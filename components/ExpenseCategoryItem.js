import { useState } from "react";
import { currencyFormatter } from "@/lib/utils";
import ViewExpenseModal from "./modals/ViewExpenseModal";

function ExpenseCategoryItem({ expense }) {
  const [showViewExpenseModal, setViewExpenseModal] = useState(false);

  return (
    <>
      {/* View Expense Modal */}
      <ViewExpenseModal
        show={showViewExpenseModal}
        onClose={setViewExpenseModal}
        expense={expense}
      />

      {/* Expense Card */}
      <button
        onClick={() => setViewExpenseModal(true)}
        className="w-full transition-transform duration-200 hover:scale-105 focus:outline-none"
      >
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white hover:bg-white/20 transition-all duration-300">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div
              className="w-[30px] h-[30px] rounded-full border-2 border-white"
              style={{ backgroundColor: expense.color }}
            />
            <h4 className="capitalize text-lg font-medium">{expense.title}</h4>
          </div>

          {/* Expense Amount */}
          <p className="text-lg font-semibold">{currencyFormatter(expense.total)}</p>
        </div>
      </button>
    </>
  );
}

export default ExpenseCategoryItem;
