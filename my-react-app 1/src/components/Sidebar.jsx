import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Layout,
  Users,
  UserPlus,
  Truck,
  Building2,
  Calculator,
  AlertTriangle,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Dashboard",
      icon: <Layout size={18} />,
      path: "/admin-dashboard",
    },
    {
      title: "User Management",
      icon: <Users size={18} />,
      path: "/admin/users",
    },
    {
      title: "Manage Agent",
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

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white border-r border-stone-200 flex flex-col h-screen sticky top-0 font-sans text-stone-800">
      {/* Logo Container */}
      <div className="p-6 flex items-center gap-3 border-b border-stone-200">
        <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white shadow shadow-amber-200">
          <Truck size={20} />
        </div>

        <span className="font-extrabold text-xl tracking-wide text-stone-900">
          Logistics
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-4 mb-4">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 border border-transparent ${isActive
                  ? "bg-amber-100/70 border-amber-200/50 text-amber-800 shadow-sm shadow-amber-100/30"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>


      <div className="p-4">
        <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60">
          <button onClick={handleLogout} className="w-full bg-white border border-stone-200 py-2.5 rounded-xl text-xs font-bold text-stone-700 flex items-center justify-center gap-2 hover:bg-stone-100 hover:text-stone-900 transition duration-200 shadow-sm">
            <LogOut size={14} className="text-stone-400" />
            LOGOUT
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;