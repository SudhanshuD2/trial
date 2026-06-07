import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Filter,
  AlertCircle,
  Clock,
  CheckCircle,
  Eye,
} from "lucide-react";

const initialComplaints = [
  {
    id: 1,
    userId: "U4821",
    customer: "Vikram Malhotra",
    complaintId: "CMP9210",
    description: "Package box arrived with visible tearing at Mumbai transit hub site.",
    date: "2026-06-02 10:15",
    status: "OPEN",
  },
  {
    id: 2,
    userId: "U3019",
    customer: "Ananya Sharma",
    complaintId: "CMP9188",
    description: "Delhi bound shipment delayed. Local delivery executive not picking up calls.",
    date: "2026-06-03 15:30",
    status: "IN PROGRESS",
  },
  {
    id: 3,
    userId: "U8824",
    customer: "Rajesh Patel",
    complaintId: "CMP9055",
    description: "Incorrect address lane classification tag applied at Ahmedabad center.",
    date: "2026-06-04 09:00",
    status: "RESOLVED",
  },
  {
    id: 4,
    userId: "U1107",
    customer: "Kavita Rao",
    complaintId: "CMP8921",
    description: "Duplicate dynamic digital tracking charge logged on baseline shipping fee.",
    date: "2026-06-05 14:20",
    status: "CLOSED",
  },
];

const statusClass = (status) => {
  switch (status) {
    case "OPEN":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "IN PROGRESS":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "RESOLVED":
      return "bg-green-100 text-green-700 border-green-200";
    case "CLOSED":
      return "bg-stone-200 text-stone-700 border-stone-300";
    default:
      return "bg-stone-100 text-stone-600 border-stone-200";
  }
};

const ManageComplaints = () => {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [showResolveModal, setShowResolveModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [activeTicket, setActiveTicket] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [remarks, setRemarks] = useState("");

  // Open manage/status modal configuration
  const handleOpenResolveModal = (ticket) => {
    setActiveTicket(ticket);
    setSelectedStatus(ticket.status);
    setShowResolveModal(true);
  };

  // Open clean description viewing modal configuration
  const handleOpenViewModal = (ticket) => {
    setActiveTicket(ticket);
    setShowViewModal(true);
  };

  // Handle local state updates for status changes
  const handleUpdateStatus = () => {
    if (!activeTicket) return;

    setComplaints(
      complaints.map((item) =>
        item.id === activeTicket.id
          ? { ...item, status: selectedStatus }
          : item
      )
    );

    setShowResolveModal(false);
    setActiveTicket(null);
    setRemarks("");
  };

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
                Manage Complaints
              </h2>
              <p className="text-stone-500 text-sm mt-1">
                Audit tickets across resolution variations, pipeline complaints, and operational faults
              </p>
            </div>
          </div>

          {/* Stats Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-rose-50 rounded-lg text-rose-600 border border-rose-100 mb-2">
                <AlertCircle size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">OPEN TICKETS</p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">
                {complaints.filter((c) => c.status === "OPEN").length}
              </h3>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600 border border-amber-100 mb-2">
                <Clock size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">IN PROGRESS</p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">
                {complaints.filter((c) => c.status === "IN PROGRESS").length}
              </h3>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-green-50 rounded-lg text-green-600 border border-green-100 mb-2">
                <CheckCircle size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">RESOLVED / CLOSED</p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">
                {complaints.filter((c) => c.status === "RESOLVED" || c.status === "CLOSED").length}
              </h3>
            </div>
          </div>

          {/* Complaints Table Manifest Container */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">SN</th>
                    <th className="px-6 py-4">User ID</th>
                    <th className="px-6 py-4">Customer Name</th>
                    <th className="px-6 py-4">Complaint ID</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Date Raised</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-100 text-sm">
                  {complaints.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-stone-50/80 transition"
                    >
                      <td className="px-6 py-4 text-stone-500">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="px-6 py-4 font-mono text-stone-600">{item.userId}</td>
                      <td className="px-6 py-4 font-medium text-stone-700">
                        {item.customer}
                      </td>
                      <td className="px-6 py-4 font-bold text-amber-600">
                        {item.complaintId}
                      </td>

                      {/* Truncated description field with inline layout viewing action */}
                      <td className="px-6 py-4 max-w-xs text-stone-600">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate" title={item.description}>{item.description}</span>
                          <button
                            onClick={() => handleOpenViewModal(item)}
                            className="text-stone-400 hover:text-amber-600 p-1 rounded-md hover:bg-stone-100 transition shrink-0"
                            title="View Full Details"
                          >
                            <Eye size={14} />
                          </button>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-stone-500 font-mono text-xs">{item.date}</td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold border uppercase tracking-wide ${statusClass(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleOpenResolveModal(item)}
                          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-xs font-semibold hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-100 transition"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL 1: VIEW FULL DESCRIPTION PANEL */}
      {showViewModal && activeTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => { setShowViewModal(false); setActiveTicket(null); }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-bold text-lg text-stone-900 border-b border-stone-100 pb-2">
              Complaint Statement Details
            </h3>
            <div className="space-y-2">
              <p className="text-xs font-bold text-stone-400 uppercase">Ticket ID: <span className="text-amber-600">{activeTicket.complaintId}</span></p>
              <p className="text-xs font-bold text-stone-400 uppercase">Customer: <span className="text-stone-700">{activeTicket.customer}</span></p>
              <div className="mt-3 p-4 bg-stone-50 rounded-xl border border-stone-200/60 text-sm text-stone-700 leading-relaxed max-h-60 overflow-y-auto whitespace-pre-wrap">
                {activeTicket.description}
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => { setShowViewModal(false); setActiveTicket(null); }}
                className="w-full sm:w-auto px-5 py-2 border border-stone-200 rounded-xl text-sm font-semibold text-stone-700 hover:bg-stone-50 transition"
              >
                Close Statement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: STATUS CHANGE UPDATE MODAL DIALOG */}
      {showResolveModal && activeTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => { setShowResolveModal(false); setActiveTicket(null); }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-bold text-lg text-stone-900 tracking-tight border-b border-stone-100 pb-2">
              Manage Complaint {activeTicket.complaintId}
            </h3>

            <div className="space-y-4">
              {/* Dynamic Dropdown Status Selector Field */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Update Ticket Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full mt-1.5 border border-stone-200 bg-stone-50 rounded-xl px-3 py-2.5 text-sm font-semibold text-stone-800 outline-none focus:border-amber-400 transition"
                >
                  <option value="OPEN">OPEN</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="RESOLVED">RESOLVED</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Internal Resolution Remarks
                </label>
                <textarea
                  rows="3"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full mt-1.5 border border-stone-200 bg-stone-50 rounded-xl p-3 text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                  placeholder="Enter explicit updates or case notes..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => { setShowResolveModal(false); setActiveTicket(null); }}
                  className="flex-1 border border-stone-200 rounded-xl py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateStatus}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl py-2 text-sm font-semibold shadow-md shadow-amber-100 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageComplaints;