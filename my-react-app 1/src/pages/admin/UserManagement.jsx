import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";

const shipments = [
  {
    id: "SH-001XA",
    creator: "ABC",
    source: "Delhi",
    destination: "Mumbai",
    agent: "John Smith",
    status: "Delivered",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "SH-0032XB",
    creator: "XYZ",
    source: "Chennai",
    destination: "Delhi",
    agent: "Emma Wilson",
    status: "In Transit",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "SH-003XC",
    creator: "Robert Wilson",
    source: "Newark Hub",
    destination: "Indore",
    agent: "Michael Brown",
    status: "Delayed",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "SH004DX",
    creator: "Sarah Chen",
    source: "Noida",
    destination: "Bhopal",
    agent: "Sarah Davis",
    status: "Cancelled",
    color: "bg-rose-100 text-rose-700",
  },
];

function UserManagement() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-8">
          {/* Page Title */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              User Management
            </h2>
          </section>

          {/* Table */}
          <section className="bg-white rounded-xl shadow overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="font-bold text-slate-800">
                Users & Shipments
              </h3>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm hover:bg-slate-50">
                  <Filter size={16} />
                  Filter
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-xl text-sm font-semibold hover:bg-emerald-800">
                  <Plus size={16} />
                  Add User
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-4 text-left">Sr No.</th>
                    <th className="px-4 py-4 text-left">Shipment ID</th>
                    <th className="px-4 py-4 text-left">Creator</th>
                    <th className="px-4 py-4 text-left">Source</th>
                    <th className="px-4 py-4 text-left">Destination</th>
                    <th className="px-4 py-4 text-left">Agent</th>
                    <th className="px-4 py-4 text-left">Status</th>
                    <th className="px-4 py-4 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {shipments.map((shipment, index) => (
                    <tr
                      key={shipment.id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-4 py-4">{index + 1}</td>

                      <td className="px-4 py-4 font-bold text-indigo-600">
                        {shipment.id}
                      </td>

                      <td className="px-4 py-4">
                        {shipment.creator}
                      </td>

                      <td className="px-4 py-4">
                        {shipment.source}
                      </td>

                      <td className="px-4 py-4">
                        {shipment.destination}
                      </td>

                      <td className="px-4 py-4">
                        {shipment.agent}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${shipment.color}`}
                        >
                          {shipment.status}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex gap-4 items-center">
                          <button className="text-indigo-600 font-semibold hover:underline">
                            View
                          </button>

                          <button className="flex items-center gap-1 text-slate-500 hover:text-indigo-600">
                            <Pencil size={15} />
                            Status
                          </button>

                          <button className="text-slate-400 hover:text-red-600">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t flex justify-between items-center">
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

export default UserManagement;

