import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  MapPin,
  Route,
  Plus,
  Trash2,
  Filter,
  Download,
  X,
} from "lucide-react";

const CityManagement = () => {
  const [showModal, setShowModal] = useState(false);

  const cities = [
    {
      id: "#DEL-001",
      name: "Delhi",
      short: "DL",
      distance: "0.0",
    },
    {
      id: "#MUM-002",
      name: "Mumbai",
      short: "MH",
      distance: "1415.0",
    },
    {
      id: "#BLR-003",
      name: "Bengaluru",
      short: "KA",
      distance: "2110.0",
    },
    {
      id: "#HYD-004",
      name: "Hyderabad",
      short: "TS",
      distance: "1570.5",
    },
    {
      id: "#KOL-005",
      name: "Kolkata",
      short: "WB",
      distance: "1530.2",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-8">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                City Management
              </h2>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Cities */}
            <div className="bg-white p-6 rounded-xl shadow border flex flex-col items-center">
              <div className="p-3 bg-indigo-100 rounded-xl mb-4">
                <MapPin className="text-indigo-600" size={28} />
              </div>

              <p className="text-xs uppercase font-semibold text-slate-500">
                Total Cities
              </p>

              <h3 className="text-3xl font-bold mt-2">42</h3>
            </div>

            {/* Average Distance */}
            <div className="bg-white p-6 rounded-xl shadow border flex flex-col items-center">
              <div className="p-3 bg-amber-100 rounded-xl mb-4">
                <Route className="text-amber-600" size={28} />
              </div>

              <p className="text-xs uppercase font-semibold text-slate-500">
                Avg Distance
              </p>

              <h3 className="text-3xl font-bold mt-2">50</h3>
            </div>

            {/* Add City Card */}
            <div
              onClick={() => setShowModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all rounded-xl shadow flex flex-col justify-center items-center text-white"
            >
              <Plus size={50} />

              <p className="font-bold text-xl mt-2">
                Add City
              </p>
            </div>
          </div>

          {/* City Table */}
          <div className="bg-white rounded-xl shadow border overflow-hidden">
            {/* Table Header */}
            <div className="p-6 border-b flex justify-between items-center">
              <h4 className="text-lg font-bold">
                Active City Directory
              </h4>

              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-slate-100">
                  <Filter size={18} />
                </button>

                <button className="p-2 rounded-lg hover:bg-slate-100">
                  <Download size={18} />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left">SR NO.</th>
                    <th className="px-6 py-4 text-left">CITY ID</th>
                    <th className="px-6 py-4 text-left">CITY NAME</th>
                    <th className="px-6 py-4 text-left">
                      DISTANCE VALUE
                    </th>
                    <th className="px-6 py-4 text-right">
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cities.map((city, index) => (
                    <tr
                      key={city.id}
                      className="border-t hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td className="px-6 py-4 font-semibold text-indigo-600">
                        {city.id}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                            {city.short}
                          </div>

                          <span className="font-medium">
                            {city.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {city.distance}
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
            <div className="p-4 border-t flex justify-between items-center">
              <p className="text-sm text-slate-500">
                Showing 5 of 42 Cities
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">
                  Previous
                </button>

                <button className="px-3 py-1 bg-indigo-600 text-white rounded">
                  1
                </button>

                <button className="px-3 py-1 border rounded">
                  2
                </button>

                <button className="px-3 py-1 border rounded">
                  3
                </button>

                <button className="px-3 py-1 border rounded">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add City Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="font-bold text-lg">
                Add New City
              </h3>

              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form className="p-6 space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  City ID
                </label>

                <input
                  type="text"
                  placeholder="#MAA-006"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  City Name
                </label>

                <input
                  type="text"
                  placeholder="Chennai"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Distance Value (KM)
                </label>

                <input
                  type="number"
                  placeholder="2200"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>
            </form>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-5 border-t">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
                Add City
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityManagement;