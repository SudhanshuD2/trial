import React from "react";
import { User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-stone-200 sticky top-0 z-10 font-sans text-stone-800">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-stone-900 tracking-wide">
          Admin Dashboard
        </h1>
      </div>
    </header>
  );
};

export default DashboardHeader;