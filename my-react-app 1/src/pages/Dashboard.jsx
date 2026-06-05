import { useState } from "react";

function Dashboard() {
  const [tab, setTab] = useState("shipment");
  const [showProfile, setShowProfile] = useState(false);

  const [weight, setWeight] = useState(10);
  const estimatedCost = weight * 15 + 100;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12">

      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
          Logistics Dashboard
        </h1>

        {/* Profile Dropdown Wrapper */}
        <div className="relative">
          <button
            className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-xl shadow transition"
            onClick={() => setShowProfile(!showProfile)}
          >
            👤
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-72 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl z-50 space-y-3">
              <h3 className="text-md font-bold text-white border-b border-slate-700 pb-2">My Profile</h3>
              <input defaultValue="John Doe" className="w-full px-3 py-1.5 text-sm bg-slate-700 border border-slate-600 rounded text-white focus:outline-none" />
              <input defaultValue="john@email.com" className="w-full px-3 py-1.5 text-sm bg-slate-700 border border-slate-600 rounded text-white focus:outline-none" />
              <input defaultValue="+91 9876543210" className="w-full px-3 py-1.5 text-sm bg-slate-700 border border-slate-600 rounded text-white focus:outline-none" />

              <div className="flex gap-2 pt-2">
                <button className="flex-1 text-xs py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition">
                  Edit
                </button>
                <button className="flex-1 text-xs py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded font-medium transition">
                  Reset Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex space-x-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700 shadow-md">
        <button
          onClick={() => setTab("shipment")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition ${tab === "shipment" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white hover:bg-slate-700"}`}
        >
          Create Shipment
        </button>
        <button
          onClick={() => setTab("track")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition ${tab === "track" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white hover:bg-slate-700"}`}
        >
          Track Shipment
        </button>
        <button
          onClick={() => setTab("complaint")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition ${tab === "complaint" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white hover:bg-slate-700"}`}
        >
          Complaints
        </button>
      </div>

      {/* Main Workspace Panels */}
      <div className="max-w-6xl mx-auto px-4 mt-6">

        {/* TAB 1: CREATE SHIPMENT */}
        {tab === "shipment" && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-2">Create Shipment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input defaultValue="Mumbai" placeholder="Source City" className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input defaultValue="Delhi" placeholder="Destination City" className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Box Packaging</option>
                <option>Fragile Packaging</option>
                <option>Wooden Crate</option>
              </select>

              <textarea
                rows="4"
                defaultValue="Electronics shipment"
                className="w-full md:col-span-2 px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-4 bg-blue-950/40 border border-blue-800 text-blue-300 rounded-xl text-lg font-bold">
              Estimated Cost: ₹{estimatedCost}
            </div>

            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow dynamic-transition">
              Book Shipment
            </button>
          </div>
        )}

        {/* TAB 2: ACTIVE TRACKING TIMELINE */}
        {tab === "track" && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-2">Active Shipment</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm bg-slate-900/50 p-4 rounded-xl border border-slate-700">
              <p><strong className="text-slate-400">ID:</strong> SHP10245</p>
              <p>
                <strong className="text-slate-400">Status:</strong>{" "}
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">In Transit</span>
              </p>
              <p><strong className="text-slate-400">Source:</strong> Mumbai</p>
              <p><strong className="text-slate-400">Destination:</strong> Delhi</p>
              <p><strong className="text-slate-400">Weight:</strong> 15 Kg</p>
              <p><strong className="text-slate-400">Packaging:</strong> Box Packaging</p>
              <p className="sm:col-span-2 lg:col-span-3"><strong className="text-slate-400">Description:</strong> Electronics</p>
              <p><strong className="text-slate-400">Arrival:</strong> 20 June 2026</p>
              <p><strong className="text-slate-400">Agent:</strong> Rahul Sharma</p>
              <p><strong className="text-slate-400">Contact:</strong> +91 9876543210</p>
            </div>

            {/* Stepper Status Line */}
            <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl flex flex-wrap justify-between items-center text-xs sm:text-sm font-medium gap-2">
              <span className="text-green-400">Ordered ✓</span>
              <span className="text-slate-500">→</span>
              <span className="text-green-400">Dispatched ✓</span>
              <span className="text-slate-500">→</span>
              <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 animate-pulse">In Transit 📦</span>
              <span className="text-slate-500">→</span>
              <span className="text-slate-500">Delivered</span>
            </div>
          </div>
        )}

        {/* TAB 3: COMPLAINTS TICKETS */}
        {tab === "complaint" && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-2">Raise Complaint</h2>

            <div className="space-y-4 max-w-xl">
              <input defaultValue="SHP10245" placeholder="Order ID" className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="4" placeholder="Complaint Description" className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition">
                Submit Ticket
              </button>
            </div>

            <hr className="border-slate-700" />

            <h3 className="text-lg font-bold text-slate-300">Previous Complaints</h3>

            <div className="space-y-3">
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl flex justify-between items-center">
                <p className="font-semibold text-slate-300">Ticket #T101</p>
                <p className="text-sm px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">Resolved ✅</p>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl flex justify-between items-center">
                <p className="font-semibold text-slate-300">Ticket #T102</p>
                <p className="text-sm px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">Under Review ⏳</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;