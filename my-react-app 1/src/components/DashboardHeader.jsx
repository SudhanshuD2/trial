import React from "react";
import {
  Bell,
  Search,
} from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="bg-white px-8 py-4 flex items-center justify-between border-b border-slate-200 sticky top-0 z-10">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        {/* Search Bar */}
        <div className="relative w-96">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search data..."
            className="w-full pl-10 pr-3 py-2 bg-slate-100 rounded-xl text-sm border-none outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={24} />

          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-700">
              Admin User
            </p>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AOTSTNqTKicwgp7ti7J4AmZ5zDIcJ4PSLypb0ywwRbtXy2eNJ6hwy3dNuY5FzyDN09Qpxezk2g8J0JBJBKese4D_RLAaaNM9TI-aSxguIGAZpWcKV77q3pd-BSTGdb0xkPZl9ALDITwnN2kfIOa_EZEwrcOZvedqTDIxg5oD2eSzBhnzEFTDdVv9hG_-sFvlPZV96qY0NYbYlZL_ACcwqqTYmHEVrj3l1VTdzvg6Nh4iLxdQjievycYaeU0WZDEGPNHali7TJiU"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;