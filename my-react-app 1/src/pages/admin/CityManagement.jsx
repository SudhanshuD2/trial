import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  MapPin,
  Route,
  Plus,
  Trash2,
  Filter,
} from "lucide-react";

const initialCities = [
  { id: "DEL001", name: "Delhi", short: "DL", distance: "0.0" },
  { id: "MUM002", name: "Mumbai", short: "MH", distance: "1415.0" },
  { id: "BLR003", name: "Bengaluru", short: "KA", distance: "2110.0" },
  { id: "HYD004", name: "Hyderabad", short: "TS", distance: "1570.5" },
  { id: "KOL005", name: "Kolkata", short: "WB", distance: "1530.2" },
];

const CityManagement = () => {
  const [cities, setCities] = useState(initialCities);
  const [showModal, setShowModal] = useState(false);

  // Form input states
  const [cityId, setCityId] = useState("");
  const [cityName, setCityName] = useState("");
  const [distance, setDistance] = useState("");

  // Handle adding a new city node
  const handleAddCity = (e) => {
    e.preventDefault();
    if (!cityId || !cityName || !distance) return;

    const newCity = {
      id: cityId.startsWith("#") ? cityId : `#${cityId.toUpperCase()}`,
      name: cityName,
      short: cityName.slice(0, 2).toUpperCase(),
      distance: parseFloat(distance).toFixed(1),
    };

    setCities([...cities, newCity]);
    setShowModal(false);

    // Clear input fields
    setCityId("");
    setCityName("");
    setDistance("");
  };

  // Handle removing a city node
  const handleDeleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  // Dynamically compute statistical metrics
  const totalDistance = cities.reduce((acc, curr) => acc + parseFloat(curr.distance), 0);
  const avgDistance = cities.length > 0 ? (totalDistance / cities.length).toFixed(1) : "0.0";

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-800">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 md:p-8 overflow-auto space-y-8">
          {/* Page Header */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              City Hub Management
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Configure baseline shipping nodes and geometric distance distributions
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Cities */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600 border border-amber-100 mb-2">
                <MapPin size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Total Hubs
              </p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">{cities.length}</h3>
            </div>

            {/* Average Distance */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center">
              <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600 border border-amber-100 mb-2">
                <Route size={16} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Avg Distance
              </p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">{avgDistance} KM</h3>
            </div>

            {/* Add City Trigger Card */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-md shadow-amber-100 flex flex-col items-center justify-center hover:from-amber-600 hover:to-amber-700 transition duration-300 group"
            >
              <Plus size={24} className="group-hover:scale-110 transition duration-300" />
              <span className="font-bold text-xs tracking-wide uppercase mt-2">Add New Hub</span>
            </button>
          </div>

          {/* City Table directory */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-stone-200 flex justify-between items-center">
              <h4 className="text-lg font-bold text-stone-900 tracking-tight">
                Active City Directory
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Sr No.</th>
                    <th className="px-6 py-4">City ID</th>
                    <th className="px-6 py-4">City Name</th>
                    <th className="px-6 py-4">Distance Value</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-100 text-sm">
                  {cities.map((city, index) => (
                    <tr
                      key={city.id}
                      className="hover:bg-stone-50/80 transition"
                    >
                      <td className="px-6 py-4 text-stone-500">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td className="px-6 py-4 font-bold text-amber-600">
                        {city.id}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 flex items-center justify-center text-xs font-bold">
                            {city.short}
                          </div>
                          <span className="font-medium text-stone-700">
                            {city.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-mono text-stone-600">
                        {city.distance} KM
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDeleteCity(city.id)}
                          className="text-stone-400 hover:text-rose-600 transition"
                        >
                          <Trash2 size={16} />
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

      {/* Add City Modal Overlay Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-bold text-lg text-stone-900 tracking-tight border-b border-stone-100 pb-2">
              Add New Hub Location
            </h3>

            <form onSubmit={handleAddCity} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Hub Code / City ID
                </label>
                <input
                  type="text"
                  value={cityId}
                  onChange={(e) => setCityId(e.target.value)}
                  placeholder="e.g., #MAA-006"
                  className="w-full mt-1.5 border border-stone-200 bg-stone-50 rounded-xl px-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  City Name
                </label>
                <input
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  placeholder="e.g., Chennai"
                  className="w-full mt-1.5 border border-stone-200 bg-stone-50 rounded-xl px-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Distance Value (Base KM)
                </label>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="e.g., 2200"
                  className="w-full mt-1.5 border border-stone-200 bg-stone-50 rounded-xl px-4 py-2 text-sm text-stone-800 outline-none focus:border-amber-400 transition"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-stone-200 rounded-xl py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl py-2 text-sm font-semibold shadow-md shadow-amber-100 transition"
                >
                  Add City
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityManagement;