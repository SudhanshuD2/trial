import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Truck,
  CheckCircle,
  Clock3,
  AlertCircle,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-8 overflow-auto">
          {/* Operations Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Operations Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Shipments */}
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                    <Truck size={24} />
                  </div>
                </div>

                <p className="text-xs text-center font-semibold text-slate-500">
                  Total Shipments
                </p>

                <h3 className="text-3xl font-bold text-center mt-2">
                  12,842
                </h3>
              </div>

              {/* Shipment Success */}
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-500">
                    <CheckCircle size={24} />
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  Shipment Success
                </p>

                <h3 className="text-3xl font-bold mt-2">98.4%</h3>
              </div>

              {/* On Duty Agents */}
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500">
                    <Clock3 size={24} />
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  On-duty Agents
                </p>

                <h3 className="text-3xl font-bold mt-2">156</h3>
              </div>

              {/* Complaints */}
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-rose-50 rounded-xl text-rose-500">
                    <AlertCircle size={24} />
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  Open Complaints
                </p>

                <h3 className="text-3xl font-bold mt-2">24</h3>
              </div>
            </div>
          </section>

          {/* Shipments Table */}
          <section className="bg-white rounded-xl shadow overflow-hidden">
            {/* Table Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Shipments</h3>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm hover:bg-slate-50">
                  <Filter size={16} />
                  Filter
                </button>

                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm hover:bg-slate-50">
                  Status: All
                  <ChevronDown size={16} />
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-xl text-sm font-semibold hover:bg-emerald-800">
                  <Plus size={16} />
                  Create Shipment
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Sr No.</th>
                    <th className="px-6 py-4">Shipment ID</th>
                    <th className="px-6 py-4">Shipment Creator</th>
                    <th className="px-6 py-4">Source</th>
                    <th className="px-6 py-4">Destination</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      id: "LX-9948210",
                      creator: "John Doe",
                      source: "Chicago North",
                      destination: "Los Angeles Port",
                      status: "Delivered",
                      color:
                        "bg-emerald-100 text-emerald-700",
                    },
                    {
                      id: "LX-9948552",
                      creator: "Jane Smith",
                      source: "Houston Central",
                      destination: "Miami Gateway",
                      status: "In Transit",
                      color:
                        "bg-indigo-100 text-indigo-700",
                    },
                    {
                      id: "LX-9948119",
                      creator: "Robert Wilson",
                      source: "Newark Hub",
                      destination: "Seattle Terminal",
                      status: "Delayed",
                      color:
                        "bg-amber-100 text-amber-700",
                    },
                    {
                      id: "LX-9947002",
                      creator: "Sarah Chen",
                      source: "San Diego Port",
                      destination: "Phoenix Yard",
                      status: "Cancelled",
                      color:
                        "bg-rose-100 text-rose-700",
                    },
                  ].map((shipment, index) => (
                    <tr
                      key={shipment.id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">{index + 1}</td>

                      <td className="px-6 py-4 font-bold text-indigo-600">
                        {shipment.id}
                      </td>

                      <td className="px-6 py-4">
                        {shipment.creator}
                      </td>

                      <td className="px-6 py-4">
                        {shipment.source}
                      </td>

                      <td className="px-6 py-4">
                        {shipment.destination}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${shipment.color}`}
                        >
                          {shipment.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button className="text-indigo-600 font-semibold hover:underline">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Showing 1 to 4 of 48 shipments
              </p>

              <div className="flex items-center gap-2">
                <button className="p-2 border rounded-lg">
                  <ChevronLeft size={16} />
                </button>

                <button className="w-8 h-8 bg-indigo-600 text-white rounded-lg text-xs">
                  1
                </button>

                <button className="w-8 h-8 border rounded-lg text-xs">
                  2
                </button>

                <button className="w-8 h-8 border rounded-lg text-xs">
                  3
                </button>

                <button className="p-2 border rounded-lg">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;