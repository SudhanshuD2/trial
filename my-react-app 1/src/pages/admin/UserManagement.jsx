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

// Updated dataset representing Indian users instead of orders
const usersData = [
  {
    id: "USR4012",
    name: "Aarav Sharma",
    email: "aarav.sharma@email.com",
    city: "Mumbai",
    phone: "+91 98765 43210",
    role: "Admin",
    status: "Active",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: "USR7831",
    name: "Priya Patel",
    email: "priya.patel@email.com",
    city: "Ahmedabad",
    phone: "+91 91234 56789",
    role: "Agent",
    status: "Active",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: "USR2944",
    name: "Rohan Verma",
    email: "rohan.v@email.com",
    city: "Delhi",
    phone: "+91 99887 76655",
    role: "Customer",
    status: "Suspended",
    color: "bg-stone-200 text-stone-700 border-stone-300",
  },
  {
    id: "USR5019",
    name: "Ananya Iyer",
    email: "ananya.iyer@email.com",
    city: "Chennai",
    phone: "+91 88776 65544",
    role: "Customer",
    status: "Active",
    color: "bg-green-100 text-green-700 border-green-200",
  },
];

function UserManagement() {
  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">
          {/* Page Title */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              User Management
            </h2>
          </section>

          {/* Users Table Container */}
          <section className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                Registered Users
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Sr No.</th>
                    <th className="px-6 py-4">User ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-100 text-sm">
                  {usersData.map((user, index) => (
                    <tr
                      key={user.id}
                      className="hover:bg-stone-50/80 transition"
                    >
                      <td className="px-6 py-4 text-stone-500">{index + 1}</td>

                      <td className="px-6 py-4 font-bold text-amber-600">
                        {user.id}
                      </td>

                      <td className="px-6 py-4 font-medium text-stone-700">
                        {user.name}
                      </td>

                      <td className="px-6 py-4 text-stone-600">
                        {user.email}
                      </td>

                      <td className="px-6 py-4 text-stone-600">
                        {user.city}
                      </td>

                      <td className="px-6 py-4 font-mono text-stone-600">
                        {user.phone}
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-semibold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200 text-xs">
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border ${user.color}`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-4 items-center justify-end">
                          <button className="text-xs font-bold text-stone-500 hover:text-amber-600 underline underline-offset-4 transition">
                            View
                          </button>
                          <button className="text-stone-400 hover:text-rose-600 transition">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default UserManagement;