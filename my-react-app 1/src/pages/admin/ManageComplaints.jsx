import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
  Headphones,
} from "lucide-react";

const complaints = [
  {
    id: 1,
    userId: "U-1001",
    customer: "Jane Doe",
    complaintId: "#CMP-9210",
    description: "Package arrived with visible damage.",
    date: "2023-11-24 10:15",
    status: "OPEN",
  },
  {
    id: 2,
    userId: "U-1002",
    customer: "Mark Robinson",
    complaintId: "#CMP-9188",
    description: "Delayed shipment. Agent not responding.",
    date: "2023-11-23 15:30",
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    userId: "U-1003",
    customer: "Sarah Hughes",
    complaintId: "#CMP-9055",
    description: "Incorrect address label applied.",
    date: "2023-11-22 09:00",
    status: "RESOLVED",
  },
  {
    id: 4,
    userId: "U-1004",
    customer: "Tom Lewis",
    complaintId: "#CMP-8921",
    description: "Duplicate charge on shipment fee.",
    date: "2023-11-21 14:20",
    status: "CLOSED",
  },
];

const statusClass = (status) => {
  switch (status) {
    case "OPEN":
      return "bg-red-100 text-red-700";
    case "IN_PROGRESS":
      return "bg-blue-100 text-blue-700";
    case "RESOLVED":
      return "bg-green-100 text-green-700";
    case "CLOSED":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const ManageComplaints = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      {/* SAME FIX AS SHIPMENT PAGE */}
      <div className="flex-1">
        <DashboardHeader title="Manage Complaints" />

        <main className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Manage Complaints
              </h2>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-white hover:bg-slate-50">
              <Filter size={18} />
              Filters
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-600 text-white p-6 rounded-xl">
              <p className="text-sm font-semibold">TOTAL COMPLAINTS</p>
              <h3 className="text-4xl font-bold mt-2">42</h3>
            </div>

            <div className="bg-yellow-400 p-6 rounded-xl">
              <p className="text-sm font-semibold">IN PROGRESS</p>
              <h3 className="text-4xl font-bold mt-2">18</h3>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-xl">
              <p className="text-sm font-semibold">RESOLVED</p>
              <h3 className="text-4xl font-bold mt-2">10</h3>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs">SN</th>
                    <th className="px-6 py-4 text-left text-xs">USER ID</th>
                    <th className="px-6 py-4 text-left text-xs">
                      CUSTOMER
                    </th>
                    <th className="px-6 py-4 text-left text-xs">
                      COMPLAINT ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs">
                      DESCRIPTION
                    </th>
                    <th className="px-6 py-4 text-left text-xs">
                      DATE RAISED
                    </th>
                    <th className="px-6 py-4 text-left text-xs">STATUS</th>
                    <th className="px-6 py-4 text-right text-xs">ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {complaints.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">{item.id}</td>
                      <td className="px-6 py-4">{item.userId}</td>
                      <td className="px-6 py-4 font-medium">
                        {item.customer}
                      </td>
                      <td className="px-6 py-4 text-indigo-600 font-semibold">
                        {item.complaintId}
                      </td>
                      <td className="px-6 py-4">
                        {item.description}
                      </td>
                      <td className="px-6 py-4">{item.date}</td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${statusClass(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setShowModal(true)}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                        >
                          Resolve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-6 border-t">
              <p className="text-sm text-slate-500">
                Showing 1 to 4 of 128 results
              </p>

              <div className="flex gap-2">
                <button className="p-2 border rounded-lg">
                  <ChevronLeft size={18} />
                </button>

                <button className="w-10 h-10 bg-indigo-600 text-white rounded-lg">
                  1
                </button>

                <button className="w-10 h-10 border rounded-lg">
                  2
                </button>

                <button className="w-10 h-10 border rounded-lg">
                  3
                </button>

                <button className="p-2 border rounded-lg">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Help Card */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <Headphones className="text-indigo-600" size={32} />
            </div>

            <h3 className="text-xl font-bold mb-2">
              Need Help?
            </h3>

            <p className="text-slate-500 mb-4">
              Contact the core systems team if you experience
              dashboard latency or data mismatches.
            </p>

            <button className="text-indigo-600 font-semibold hover:underline">
              Open Internal Ticket
            </button>
          </div>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg">
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="font-bold text-lg">
                Resolve Complaint
              </h3>

              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <label className="block text-sm font-semibold mb-2">
                Resolution Remarks
              </label>

              <textarea
                rows="5"
                className="w-full border rounded-xl p-3"
                placeholder="Enter resolution remarks..."
              />

              <div className="mt-4 flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm">
                  Notify customer via email
                </span>
              </div>
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                Mark as Resolved
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageComplaints;