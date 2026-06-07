import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Route,
  Scale,
  Info,
  Check,
  RefreshCw,
} from "lucide-react";

const PricingRules = () => {
  // Local state for active functional tracking metrics
  const [currentDistanceRate, setCurrentDistanceRate] = useState("2.45");
  const [currentWeightRate, setCurrentWeightRate] = useState("1.15");

  const [distanceInput, setDistanceInput] = useState("2.45");
  const [weightInput, setWeightInput] = useState("1.15");

  const [distanceLoading, setDistanceLoading] = useState(false);
  const [weightLoading, setWeightLoading] = useState(false);

  const updateDistance = () => {
    if (!distanceInput || isNaN(distanceInput)) return;
    setDistanceLoading(true);
    setTimeout(() => {
      setCurrentDistanceRate(parseFloat(distanceInput).toFixed(2));
      setDistanceLoading(false);
    }, 1200);
  };

  const updateWeight = () => {
    if (!weightInput || isNaN(weightInput)) return;
    setWeightLoading(true);
    setTimeout(() => {
      setCurrentWeightRate(parseFloat(weightInput).toFixed(2));
      setWeightLoading(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Pricing Rules Management
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Configure shipment distance rates and weight-based pricing charges across India.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Distance Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
                    <Route size={18} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase border border-green-200">
                    Active
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-1">
                  Distance-based Rate
                </h3>
                <p className="text-stone-500 text-sm mb-6">
                  Set the standard logic cost per kilometer for long-haul freight transits.
                </p>

                <div className="mb-6">
                  <p className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-1">
                    Current Rate
                  </p>
                  <h4 className="text-3xl font-black text-amber-600">
                    ₹{currentDistanceRate} <span className="text-sm font-medium text-stone-500">/ KM</span>
                  </h4>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-2">
                  Configure New Rate
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-stone-400 text-sm">
                      ₹
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={distanceInput}
                      onChange={(e) => setDistanceInput(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                    />
                  </div>
                  <button
                    onClick={updateDistance}
                    disabled={distanceLoading}
                    className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-amber-700 transition shadow-md shadow-amber-100 min-w-[90px] flex items-center justify-center gap-2"
                  >
                    {distanceLoading ? (
                      <RefreshCw size={14} className="animate-spin" />
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-stone-100 text-stone-400 text-xs font-medium">
                  <Info size={14} />
                  Last updated: June 2026 by System Admin
                </div>
              </div>
            </div>

            {/* Weight Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
                    <Scale size={18} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase border border-green-200">
                    Active
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-1">
                  Weight-based Rate
                </h3>
                <p className="text-stone-500 text-sm mb-6">
                  Configure the incremental distribution cost structural surcharge per kilogram.
                </p>

                <div className="mb-6">
                  <p className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-1">
                    Current Rate
                  </p>
                  <h4 className="text-3xl font-black text-amber-600">
                    ₹{currentWeightRate} <span className="text-sm font-medium text-stone-500">/ KG</span>
                  </h4>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-2">
                  Configure New Rate
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-stone-400 text-sm">
                      ₹
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={weightInput}
                      onChange={(e) => setWeightInput(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                    />
                  </div>
                  <button
                    onClick={updateWeight}
                    disabled={weightLoading}
                    className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-amber-700 transition shadow-md shadow-amber-100 min-w-[90px] flex items-center justify-center gap-2"
                  >
                    {weightLoading ? (
                      <RefreshCw size={14} className="animate-spin" />
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-stone-100 text-stone-400 text-xs font-medium">
                  <Info size={14} />
                  Last updated: May 2026 by Logistics System
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PricingRules;