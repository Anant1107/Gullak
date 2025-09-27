import React from "react";
import barchart_expense from "../../assets/images/barchart_expense.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      {/* Left side - Form / Auth (larger) */}
      <div className="flex flex-col justify-center items-center w-3/5 bg-gray-50 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Expense Tracker
        </h2>
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right side - Stats / Image (smaller) */}
      <div className="w-2/5 relative flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-10 text-white">
        {/* Overlay content */}
        <div className="absolute top-8 left-8">
          <StatsInfoCard
            icon={<LuTrendingUpDown size={28} />}
            label="Track your income and expenses"
            value="430,000"
            color="bg-white/20"
          />
        </div>

        {/* Image */}
        <img
          src={barchart_expense}
          alt="Expense Chart"
          className="rounded-xl shadow-2xl w-3/4 mt-16"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

// Stats Card
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl shadow-md ${color} backdrop-blur-md`}
    >
      <div className="p-3 bg-white/30 rounded-full">{icon}</div>
      <div>
        <h6 className="text-sm font-medium">{label}</h6>
        <span className="text-lg font-bold">${value}</span>
      </div>
    </div>
  );
};
