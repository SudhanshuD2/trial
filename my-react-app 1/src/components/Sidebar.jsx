import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  UserPlus,
  Truck,
  Building2,
  Calculator,
  AlertTriangle,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      title: "User Management",
      icon: <Users size={18} />,
      path: "/admin/users",
    },
    {
      title: "Add Agent",
      icon: <UserPlus size={18} />,
      path: "/admin/agents",
    },
    {
      title: "Shipment Management",
      icon: <Truck size={18} />,
      path: "/admin/shipments",
    },
    {
      title: "City Management",
      icon: <Building2 size={18} />,
      path: "/admin/cities",
    },
    {
      title: "Pricing Rules",
      icon: <Calculator size={18} />,
      path: "/admin/pricing",
    },
    {
      title: "Manage Complaints",
      icon: <AlertTriangle size={18} />,
      path: "/admin/complaints",
    },
  ];





  
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
          <Truck size={22} />
        </div>

        <span className="font-bold text-lg tracking-tight">
          Logistics Core
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">
              LA
            </div>

            <div>
              <p className="text-sm font-bold">System Admin</p>
            </div>
          </div>

          <button className="w-full bg-white border border-slate-200 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
            <LogOut size={16} />
            LOGOUT
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;