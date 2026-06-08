import React from "react";
import { PlusCircle, Radar, AlertOctagon } from "lucide-react";

function DashboardSidebar({ tab, setTab }) {
    const menuItems = [
        {
            id: "shipment",
            title: "Create Shipment",
            icon: <PlusCircle size={18} />,
        },
        {
            id: "track",
            title: "Track Shipment",
            icon: <Radar size={18} />,
        },
        {
            id: "complaint",
            title: "Complaints",
            icon: <AlertOctagon size={18} />,
        },
    ];

    return (
        <div className="w-full md:w-64 bg-white border-r border-stone-200 p-4 space-y-2 flex flex-col min-h-[calc(100vh-73px)] font-sans">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-4 mb-4">
                Customer Workspace
            </p>

            <div className="space-y-1 flex-1">
                {menuItems.map((item) => {
                    const isActive = tab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 border ${isActive
                                ? "bg-gradient-to-r from-amber-500 to-amber-600 border-transparent text-white shadow-md shadow-amber-500/20"
                                : "border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                                }`}
                        >
                            <span className={isActive ? "text-white" : "text-stone-400"}>
                                {item.icon}
                            </span>
                            <span>{item.title}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default DashboardSidebar;