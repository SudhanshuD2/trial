import React from "react";
import { Truck, CircleDollarSign } from "lucide-react";

function DeliveryAgentSidebar({ tab, setTab }) {
    return (
        <div className="w-full md:w-64 bg-white border-r border-stone-200 p-4 space-y-2 flex flex-col min-h-[calc(100vh-73px)] font-sans">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-4 mb-4">
                Navigation
            </p>

            {/* Active Shipments Button */}
            <button
                onClick={() => setTab("active")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 border ${tab === "active"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 border-transparent text-white shadow-md shadow-amber-500/20"
                    : "border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
            >
                <Truck size={18} className={tab === "active" ? "text-white" : "text-stone-400"} />
                <span>Active Shipments</span>
            </button>

            {/* Commission Earned Button */}
            <button
                onClick={() => setTab("commission")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 border ${tab === "commission"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 border-transparent text-white shadow-md shadow-amber-500/20"
                    : "border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
            >
                <CircleDollarSign size={18} className={tab === "commission" ? "text-white" : "text-stone-400"} />
                <span>Commission Earned</span>
            </button>
        </div>
    );
}

export default DeliveryAgentSidebar;