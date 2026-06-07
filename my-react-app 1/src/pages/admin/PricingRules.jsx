import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Route,
  Weight,
  History,
  Plus,
  Info,
  Check,
  RefreshCw,
} from "lucide-react";

const PricingRules = () => {
  const [distanceRate, setDistanceRate] = useState("2.45");
  const [weightRate, setWeightRate] = useState("1.15");

  const [distanceLoading, setDistanceLoading] = useState(false);
  const [weightLoading, setWeightLoading] = useState(false);

  const updateDistance = () => {
    setDistanceLoading(true);

    setTimeout(() => {
      setDistanceLoading(false);
    }, 1500);
  };

  const updateWeight = () => {
    setWeightLoading(true);

    setTimeout(() => {
      setWeightLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <DashboardHeader title="Pricing Rules Management" />

        <main className="p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Pricing Rules Management
              </h2>

              <p className="text-slate-500 mt-2">
                Configure shipment pricing rates and logistics charges.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-5 py-3 border border-slate-200 bg-white rounded-xl hover:bg-slate-50">
                <History size={18} />
                Export History
              </button>

              <button className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700">
                <Plus size={18} />
                Create New Rule
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Distance Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Route className="text-indigo-600" size={26} />
                </div>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">
                  Active
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Distance-based Rate
              </h3>

              <p className="text-slate-500 mb-6">
                Set the standard cost per kilometer for long-haul shipments.
              </p>

              <div className="mb-5">
                <p className="text-xs uppercase font-bold text-slate-500 mb-1">
                  Current Rate
                </p>

                <h4 className="text-4xl font-bold text-indigo-600">
                  ₹2.45 / KM
                </h4>
              </div>

              <label className="block text-sm font-semibold mb-2">
                New Rate
              </label>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold">
                    ₹
                  </span>

                  <input
                    type="number"
                    value={distanceRate}
                    onChange={(e) => setDistanceRate(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <button
                  onClick={updateDistance}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center gap-2"
                >
                  {distanceLoading ? (
                    <RefreshCw size={18} className="animate-spin" />
                  ) : (
                    "Update"
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t text-slate-500 text-sm">
                <Info size={16} />
                Last updated: 14 Oct 2023 by Admin
              </div>
            </div>

            {/* Weight Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <Weight className="text-orange-600" size={26} />
                </div>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">
                  Active
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Weight-based Rate
              </h3>

              <p className="text-slate-500 mb-6">
                Configure the standard cost per kilogram.
              </p>

              <div className="mb-5">
                <p className="text-xs uppercase font-bold text-slate-500 mb-1">
                  Current Rate
                </p>

                <h4 className="text-4xl font-bold text-indigo-600">
                  ₹1.15 / KG
                </h4>
              </div>

              <label className="block text-sm font-semibold mb-2">
                New Rate
              </label>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold">
                    ₹
                  </span>

                  <input
                    type="number"
                    value={weightRate}
                    onChange={(e) => setWeightRate(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <button
                  onClick={updateWeight}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center gap-2"
                >
                  {weightLoading ? (
                    <RefreshCw size={18} className="animate-spin" />
                  ) : (
                    "Update"
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t text-slate-500 text-sm">
                <Info size={16} />
                Last updated: 22 Nov 2023 by System
              </div>
            </div>
          </div>

          {/* Status Banner */}
          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-3">
            <Check className="text-emerald-600" size={22} />

            <div>
              <h4 className="font-semibold text-emerald-700">
                Pricing System Active
              </h4>

              <p className="text-sm text-emerald-600">
                All pricing rules are currently active and applied to
                shipments.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PricingRules;