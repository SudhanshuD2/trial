import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Users,
  CheckCircle,
  Plus,
  Trash2,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  Mail,
  Lock,
} from "lucide-react";


const agents = [
  {
    id: "AG-1024",
    initials: "MS",
    name: "Michael Scott",
    status: "Active",
  },
  {
    id: "AG-1025",
    initials: "DS",
    name: "Dwight Schrute",
    status: "Active",
  },
  {
    id: "AG-1026",
    initials: "JH",
    name: "Jim Halpert",
    status: "Active",
  },
  {
    id: "AG-1027",
    initials: "PB",
    name: "Pam Beesly",
    status: "On Break",
  },
];

const AgentManagement = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Agent Management
              </h1>
              <p className="text-slate-500 mt-1">
                Manage all logistics agents
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Agents */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                  <Users size={24} />
                </div>

                <p className="mt-4 text-xs uppercase text-slate-500 font-semibold">
                  Total Agents
                </p>

                <h3 className="text-3xl font-bold mt-2">1,284</h3>
              </div>
            </div>

            {/* Active Agents */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-green-100 text-green-600">
                  <CheckCircle size={24} />
                </div>

                <p className="mt-4 text-xs uppercase text-slate-500 font-semibold">
                  Active Now
                </p>

                <h3 className="text-3xl font-bold mt-2">942</h3>
              </div>
            </div>

            {/* Add Agent */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-700 text-white rounded-xl shadow-sm flex flex-col items-center justify-center hover:bg-green-800 transition-all"
            >
              <Plus size={40} />

              <span className="font-bold text-lg mt-2 uppercase">
                Add Agent
              </span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="font-bold text-lg">Agents</h3>

              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <Filter size={18} />
                </button>

                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <Download size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs uppercase text-slate-500">
                    <th className="px-6 py-4">Serial No.</th>
                    <th className="px-6 py-4">Agent ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {agents.map((agent, index) => (
                    <tr
                      key={agent.id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          {agent.id}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
                            {agent.initials}
                          </div>

                          {agent.name}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {agent.status === "Active" ? (
                          <span className="text-green-600 font-semibold">
                            ● Active
                          </span>
                        ) : (
                          <span className="text-amber-600 font-semibold">
                            ● On Break
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-5 border-t">
              <span className="text-sm text-slate-500">
                Showing 1 to 4 of 1,284 entries
              </span>

              <div className="flex gap-2">
                <button className="p-2 border rounded-lg">
                  <ChevronLeft size={18} />
                </button>

                <button className="p-2 border rounded-lg">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Agent Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b p-5">
              <h3 className="font-bold text-lg">Add New Agent</h3>

              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Michael Scott"
                    className="w-full border rounded-lg pl-10 pr-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <div className="relative mt-2">
                  <Mail
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="agent@example.com"
                    className="w-full border rounded-lg pl-10 pr-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Initial Password
                </label>

                <div className="relative mt-2">
                  <Lock
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <input
                    type="password"
                    placeholder="********"
                    className="w-full border rounded-lg pl-10 pr-4 py-3"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border rounded-lg py-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white rounded-lg py-3 hover:bg-indigo-700"
                >
                  Add Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentManagement;