import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Plus,
  Pencil,
  Trash2,
  ArrowLeft,
  MapPin,
  User,
  Check,
  X,
} from "lucide-react";

const initialShipments = [
  {
    id: "SH9921",
    creator: "Aditya Malhotra",
    source: "Mumbai",
    destination: "Delhi",
    agent: "Rahul Sharma",
    status: "Delivered",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: "SH4032",
    creator: "Meera Nair",
    source: "Chennai",
    destination: "Hyderabad",
    agent: "Amit Kumar",
    status: "In Transit",
    color: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: "SH7119",
    creator: "Rajesh Kapoor",
    source: "Kolkata",
    destination: "Indore",
    agent: "Vikram Singh",
    status: "Delayed",
    color: "bg-stone-200 text-stone-700 border-stone-300",
  },
  {
    id: "SH3054",
    creator: "Sunita Rao",
    source: "Pune",
    destination: "Bhopal",
    agent: "Suresh Patel",
    status: "Cancelled",
    color: "bg-rose-100 text-rose-700 border-rose-200",
  },
];

// Helper mapping to maintain uniform color styling rules across active state switches
const statusStyles = {
  "Delivered": "bg-green-100 text-green-700 border-green-200",
  "In Transit": "bg-amber-100 text-amber-800 border-amber-200",
  "Delayed": "bg-stone-200 text-stone-700 border-stone-300",
  "Cancelled": "bg-rose-100 text-rose-700 border-rose-200",
};

const ShipmentManagement = () => {
  const [shipments, setShipments] = useState(initialShipments);
  const [selectedShipment, setSelectedShipment] = useState(null);

  // Interactive state variations for tracking layout edits
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  // DELETE BUTTON ACTION
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to remove shipment ${id}?`)) {
      setShipments(shipments.filter((item) => item.id !== id));
      if (selectedShipment?.id === id) setSelectedShipment(null);
    }
  };

  // UPDATE STATUS ACTION CONTROLS
  const startEditing = (shipment) => {
    setEditingId(shipment.id);
    setEditStatus(shipment.status);
  };

  const saveStatusUpdate = (id) => {
    setShipments(
      shipments.map((item) =>
        item.id === id
          ? { ...item, status: editStatus, color: statusStyles[editStatus] }
          : item
      )
    );
    setEditingId(null);
  };

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">

          {/* Main Context Switch View Wrapper */}
          {!selectedShipment ? (
            /* MANIFEST LIST VIEW */
            <>
              {/* Page Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
                    Manage Shipments
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">
                    Monitor logistics routing, execution states, and tracking vectors
                  </p>
                </div>
              </div>

              {/* Table Container */}
              <section className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                      <tr>
                        <th className="px-6 py-4">Sr No.</th>
                        <th className="px-6 py-4">Shipment ID</th>
                        <th className="px-6 py-4">Shipment Creator</th>
                        <th className="px-6 py-4">Source</th>
                        <th className="px-6 py-4">Destination</th>
                        <th className="px-6 py-4">Assigned Agent</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-stone-100 text-sm">
                      {shipments.map((shipment, index) => {
                        const isEditing = editingId === shipment.id;

                        return (
                          <tr
                            key={shipment.id}
                            className="hover:bg-stone-50/80 transition min-h-[60px]"
                          >
                            <td className="px-6 py-4 text-stone-500">
                              {String(index + 1).padStart(2, "0")}
                            </td>

                            <td className="px-6 py-4 font-bold text-amber-600">
                              {shipment.id}
                            </td>

                            <td className="px-6 py-4 font-medium text-stone-700">
                              {shipment.creator}
                            </td>

                            <td className="px-6 py-4 text-stone-600">
                              {shipment.source}
                            </td>

                            <td className="px-6 py-4 text-stone-600">
                              {shipment.destination}
                            </td>

                            <td className="px-6 py-4 text-stone-600">
                              {shipment.agent}
                            </td>

                            {/* Status Segment - Conditional Row Switch */}
                            <td className="px-6 py-4 text-center">
                              {isEditing ? (
                                <select
                                  value={editStatus}
                                  onChange={(e) => setEditStatus(e.target.value)}
                                  className="px-2.5 py-1 text-xs border border-stone-200 bg-stone-50 rounded-xl font-bold uppercase text-stone-700 outline-none focus:border-amber-500 transition"
                                >
                                  <option value="In Transit">In Transit</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Delayed">Delayed</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              ) : (
                                <span
                                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border ${shipment.color}`}
                                >
                                  {shipment.status}
                                </span>
                              )}
                            </td>

                            {/* Operational Action Row Blocks */}
                            <td className="px-6 py-4 text-right">
                              {isEditing ? (
                                <div className="flex gap-2 justify-end">
                                  <button
                                    onClick={() => saveStatusUpdate(shipment.id)}
                                    className="p-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition shadow-sm"
                                    title="Save Status"
                                  >
                                    <Check size={14} />
                                  </button>
                                  <button
                                    onClick={() => setEditingId(null)}
                                    className="p-1.5 bg-stone-50 text-stone-600 border border-stone-200 rounded-lg hover:bg-stone-200 transition shadow-sm"
                                    title="Cancel"
                                  >
                                    <X size={14} />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex gap-4 items-center justify-end">
                                  <button
                                    onClick={() => setSelectedShipment(shipment)}
                                    className="text-xs font-bold text-stone-500 hover:text-amber-600 underline underline-offset-4 transition"
                                  >
                                    View
                                  </button>

                                  <button
                                    onClick={() => startEditing(shipment)}
                                    className="flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-amber-600 transition"
                                  >
                                    <Pencil size={14} />
                                    Status
                                  </button>

                                  <button
                                    onClick={() => handleDelete(shipment.id)}
                                    className="text-stone-400 hover:text-rose-600 transition"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          ) : (
            /* DEEP DETAIL SCREEN OVERLAY */
            <section className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl p-6 space-y-6 animate-in fade-in zoom-in-95 duration-150">
              {/* Back Nav Block */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <button
                  onClick={() => setSelectedShipment(null)}
                  className="flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-amber-600 transition"
                >
                  <ArrowLeft size={16} />
                  Back to Manifest
                </button>

                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${selectedShipment.color}`}>
                  {selectedShipment.status}
                </span>
              </div>

              <div>
                <span className="text-xs text-stone-400 font-bold tracking-widest uppercase">E-Freight Logistics Dossier</span>
                <h3 className="text-2xl font-black text-stone-900 mt-1">
                  Tracking File {selectedShipment.id}
                </h3>
              </div>

              {/* Grid Vector Array Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <User size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Consignee</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.creator}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <MapPin size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Route Bound</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.source} ➔ {selectedShipment.destination}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-3">
                  <User size={18} className="text-stone-400" />
                  <div>
                    <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Logistics Custodian</p>
                    <p className="text-sm font-bold text-stone-700">{selectedShipment.agent}</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Action Trigger from inside layout view directly */}
              <div className="flex justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  onClick={() => handleDelete(selectedShipment.id)}
                  className="px-4 py-2 bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider rounded-xl transition"
                >
                  Terminate Shipment
                </button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShipmentManagement;