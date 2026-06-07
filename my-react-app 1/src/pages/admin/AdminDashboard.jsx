import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Truck,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Box
} from "lucide-react";

function AdminDashboard() {
  // State to track which shipment is being viewed/managed
  const [selectedShipment, setSelectedShipment] = useState(null);

  // Mock shipments data array pulled out for easy access
  const shipmentsData = [
    {
      id: "LX-9948210",
      creator: "John Doe",
      route: "Mumbai → Delhi",
      status: "Delivered",
      color: "bg-green-100 text-green-700 border-green-200",
      weight: "12 Kg",
      packaging: "Box Packaging",
      date: "04 June 2026",
      desc: "High-value consumer electronics batch."
    },
    {
      id: "LX-9948552",
      creator: "Jane Smith",
      route: "Mumbai → Delhi",
      status: "In Transit",
      color: "bg-amber-100 text-amber-800 border-amber-200",
      weight: "25 Kg",
      packaging: "Wooden Crate",
      date: "09 June 2026",
      desc: "Industrial mechanical spare parts payload."
    },
    {
      id: "LX-9948119",
      creator: "Robert Wilson",
      route: "Mumbai → Delhi",
      status: "Delayed",
      color: "bg-stone-200 text-stone-700 border-stone-300",
      weight: "8 Kg",
      packaging: "Fragile Packaging",
      date: "11 June 2026",
      desc: "Glass laboratory instruments and sensors."
    },
  ];

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">

          {/* Operations Overview Summary Metrics */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight mb-6">
              Operations Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Shipments */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 border border-amber-100">
                  <Truck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Total Shipments
                  </p>
                  <h3 className="text-2xl font-black text-stone-900 mt-0.5">
                    12,842
                  </h3>
                </div>
              </div>

              {/* Shipment Success */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 border border-amber-100">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Success Rate
                  </p>
                  <h3 className="text-2xl font-black text-stone-900 mt-0.5">
                    98.4%
                  </h3>
                </div>
              </div>

              {/* Complaints */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-rose-50 rounded-xl text-rose-500 border border-rose-100">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Open Complaints
                  </p>
                  <h3 className="text-2xl font-black text-stone-900 mt-0.5">
                    24
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Condition Control View Dynamic Display */}
          {!selectedShipment ? (
            /* SHIPMENT LIST VIEW */
            <section className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden transition-all duration-300">
              <div className="p-6 border-b border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 tracking-tight">Active Shipments</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                    <tr>
                      <th className="px-6 py-4">Shipment ID</th>
                      <th className="px-6 py-4">Creator</th>
                      <th className="px-6 py-4">Route</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-stone-100 text-sm">
                    {shipmentsData.map((shipment) => (
                      <tr
                        key={shipment.id}
                        className="hover:bg-stone-50/80 transition"
                      >
                        <td className="px-6 py-4 font-bold text-amber-600">
                          {shipment.id}
                        </td>

                        <td className="px-6 py-4 font-medium text-stone-700">
                          {shipment.creator}
                        </td>

                        <td className="px-6 py-4 text-stone-600">
                          {shipment.route}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border ${shipment.color}`}
                          >
                            {shipment.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => setSelectedShipment(shipment)}
                            className="text-xs font-bold text-stone-500 hover:text-amber-600 underline underline-offset-4 transition"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : (
            /* SIMPLIFIED DETAIL VIEW PANEL */
            <section className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl p-6 space-y-6 transition-all duration-300">

              {/* Context Action Header Bar */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <button
                  onClick={() => setSelectedShipment(null)}
                  className="flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-amber-600 transition"
                >
                  <ArrowLeft size={16} />
                  Back to Shipments
                </button>

                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${selectedShipment.color}`}>
                  {selectedShipment.status}
                </span>
              </div>

              {/* Title Identity Display */}
              <div>
                <span className="text-xs text-stone-400 font-bold tracking-widest uppercase">Console Manifest File</span>
                <h3 className="text-2xl font-black text-stone-900 mt-1">
                  Shipment {selectedShipment.id}
                </h3>
              </div>

              {/* Quick Details Parameter Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <User size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Client Account</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.creator}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <MapPin size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Transit Vector</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.route}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <Box size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Metrics & Packaging</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.weight} • {selectedShipment.packaging}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <Calendar size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Target Delivery</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.date}</p>
                  </div>
                </div>
              </div>

              {/* Manifest Description Content */}
              <div className="p-4 bg-amber-50/50 border border-amber-200/40 rounded-xl">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Package Contents Manifest</p>
                <p className="text-sm text-stone-600 leading-relaxed">{selectedShipment.desc}</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;