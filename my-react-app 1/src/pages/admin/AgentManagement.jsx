import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  CheckCircle,
  Plus,
  Trash2,
  User,
  Mail,
  Lock,
  Pencil,
  X,
  Check,
} from "lucide-react";

const initialAgents = [
  { id: "AG1024", initials: "RS", name: "Rahul Sharma", status: "Active" },
  { id: "AG1025", initials: "AK", name: "Amit Kumar", status: "Active" },
  { id: "AG1026", initials: "VS", name: "Vikram Singh", status: "Active" },
  { id: "AG1027", initials: "DP", name: "Deepika Padukone", status: "On Break" },
];

const AgentManagement = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [showModal, setShowModal] = useState(false);

  // State tracking for row editing inline
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", status: "" });

  // Handle opening the inline edit mode for a specific row
  const startEditing = (agent) => {
    setEditingId(agent.id);
    setEditForm({ name: agent.name, status: agent.status });
  };

  // Cancel inline editing
  const cancelEditing = () => {
    setEditingId(null);
  };

  // Save the inline edited details back to local state
  const saveEdit = (id) => {
    setAgents(
      agents.map((agent) => {
        if (agent.id === id) {
          // Generate new initials from the edited name string
          const names = editForm.name.trim().split(" ");
          const initials = names.map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "AG";

          return {
            ...agent,
            name: editForm.name,
            status: editForm.status,
            initials: initials,
          };
        }
        return agent;
      })
    );
    setEditingId(null);
  };

  return (
    <div className="flex bg-stone-100 min-h-screen font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Agent Management</h1>
            <p className="text-stone-500 text-sm mt-1">Manage and monitor all field logistics agents</p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Total Agents</p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">{agents.length}</h3>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-green-50 rounded-lg text-green-600 border border-green-100 mb-2">
                <CheckCircle size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Active Now</p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">
                {agents.filter((a) => a.status === "Active").length}
              </h3>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-md shadow-amber-100 flex flex-col items-center justify-center hover:from-amber-600 hover:to-amber-700 transition duration-300 group"
            >
              <Plus size={24} className="group-hover:scale-110 transition duration-300" />
              <span className="font-bold text-xs tracking-wide uppercase mt-2">Add New Agent</span>
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">On-Field Fleet</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Serial No.</th>
                    <th className="px-6 py-4">Agent ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-sm">
                  {agents.map((agent, index) => {
                    const isEditing = editingId === agent.id;

                    return (
                      <tr key={agent.id} className="hover:bg-stone-50/80 transition min-h-[60px]">
                        <td className="px-6 py-4 text-stone-500">{String(index + 1).padStart(2, "0")}</td>

                        <td className="px-6 py-4">
                          <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold uppercase">
                            {agent.id}
                          </span>
                        </td>

                        {/* Name Field Column - Static vs Input Field */}
                        <td className="px-6 py-4">
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                              className="px-3 py-1.5 border border-stone-200 bg-stone-50 rounded-xl text-sm text-stone-800 outline-none focus:border-amber-500 transition max-w-xs w-full"
                            />
                          ) : (
                            <div className="flex items-center gap-3 font-medium text-stone-700">
                              <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 flex items-center justify-center text-xs font-bold uppercase">
                                {agent.initials}
                              </div>
                              {agent.name}
                            </div>
                          )}
                        </td>

                        {/* Status Column - Static Status Tag vs Dropdown Select Selector */}
                        <td className="px-6 py-4">
                          {isEditing ? (
                            <select
                              value={editForm.status}
                              onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                              className="px-3 py-1.5 border border-stone-200 bg-stone-50 rounded-xl text-sm text-stone-800 outline-none focus:border-amber-500 transition"
                            >
                              <option value="Active">Active</option>
                              <option value="On Break">On Break</option>
                            </select>
                          ) : (
                            <span className={`font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 ${agent.status === "Active" ? "text-green-600" : "text-amber-600"}`}>
                              <span className={`h-2 w-2 rounded-full block ${agent.status === "Active" ? "bg-green-500" : "bg-amber-500"}`} />
                              {agent.status}
                            </span>
                          )}
                        </td>

                        {/* Interactive Context Action Buttons Column */}
                        <td className="px-6 py-4 text-right">
                          {isEditing ? (
                            <div className="flex justify-end gap-3">
                              <button
                                onClick={() => saveEdit(agent.id)}
                                className="p-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition shadow-sm"
                                title="Save Profile"
                              >
                                <Check size={16} />
                              </button>
                              <button
                                onClick={cancelEditing}
                                className="p-1.5 bg-stone-50 text-stone-600 border border-stone-200 rounded-lg hover:bg-stone-200 transition shadow-sm"
                                title="Cancel"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-end gap-4">
                              <button
                                onClick={() => startEditing(agent)}
                                className="flex items-center gap-1 text-stone-500 hover:text-amber-600 text-xs font-bold transition"
                                title="Edit Profile"
                              >
                                <Pencil size={14} />
                                Edit
                              </button>
                              <button
                                onClick={() => setAgents(agents.filter((a) => a.id !== agent.id))}
                                className="text-stone-400 hover:text-rose-600 transition"
                                title="Delete Agent"
                              >
                                <Trash2 size={16} />
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
          </div>
        </main>
      </div>

      {/* Add Agent Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
          <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
            <h3 className="font-bold text-lg text-stone-900 tracking-tight border-b border-stone-100 pb-2">Add New Agent</h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">Full Name</label>
                <div className="relative mt-1">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input type="text" placeholder="Rahul Sharma" className="w-full border border-stone-200 bg-stone-50 rounded-xl pl-10 pr-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">Email Address</label>
                <div className="relative mt-1">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input type="email" placeholder="rahul.sharma@email.com" className="w-full border border-stone-200 bg-stone-50 rounded-xl pl-10 pr-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">Initial Password</label>
                <div className="relative mt-1">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input type="password" placeholder="••••••••" className="w-full border border-stone-200 bg-stone-50 rounded-xl pl-10 pr-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-stone-200 rounded-xl py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition">Cancel</button>
              <button onClick={() => setShowModal(false)} className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl py-2 text-sm font-semibold shadow-md shadow-amber-100 transition">Create Agent</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentManagement;