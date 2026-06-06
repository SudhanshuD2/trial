import { useState } from "react";

function Dash() {
  const [tab, setTab] = useState("active");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const [shipments, setShipments] = useState([
    {
      id: "SHP10245",
      src: "Mumbai",
      dest: "Delhi",
      status: "In Transit",
      eta: "20 June 2026",
      commission: 1200,
    },
    {
      id: "SHP10246",
      src: "Pune",
      dest: "Bangalore",
      status: "Picked Up",
      eta: "18 June 2026",
      commission: 900,
    },
    {
      id: "SHP10247",
      src: "Hyderabad",
      dest: "Chennai",
      status: "Out for Delivery",
      eta: "16 June 2026",
      commission: 1500,
    },
  ]);

  const completedOrders = [
    {
      id: "SHP10190",
      src: "Jaipur",
      dest: "Ahmedabad",
      date: "10 June 2026",
      commission: 1000,
    },
    {
      id: "SHP10191",
      src: "Nagpur",
      dest: "Surat",
      date: "12 June 2026",
      commission: 800,
    },
    {
      id: "SHP10192",
      src: "Kolkata",
      dest: "Patna",
      date: "14 June 2026",
      commission: 1400,
    },
  ];

  const totalCommission = completedOrders.reduce(
    (sum, item) => sum + item.commission,
    0
  );

  const updateStatus = (value) => {
    setSelectedShipment({
      ...selectedShipment,
      status: value,
    });

    setShipments(
      shipments.map((s) =>
        s.id === selectedShipment.id ? { ...s, status: value } : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-12">

      {/* Header */}

      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-extrabold text-blue-400">
          Delivery Agent Dashboard
        </h1>

        <div className="relative">

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
          >
            👤
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-72 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl space-y-3">

              <h3 className="font-bold border-b border-slate-700 pb-2">
                Agent Profile
              </h3>

              <input
                defaultValue="Rahul Sharma"
                className="w-full px-3 py-2 bg-slate-700 rounded"
              />

              <input
                defaultValue="rahul@logistics.com"
                className="w-full px-3 py-2 bg-slate-700 rounded"
              />

              <input
                defaultValue="+91 9876543210"
                className="w-full px-3 py-2 bg-slate-700 rounded"
              />

              <div className="flex gap-2">

                <button className="flex-1 bg-blue-600 py-2 rounded">
                  Edit
                </button>

                <button className="flex-1 bg-slate-700 py-2 rounded">
                  Reset
                </button>

              </div>

            </div>
          )}
        </div>
      </div>

      {/* Tabs */}

      <div className="max-w-6xl mx-auto mt-8 px-4">

        <div className="flex space-x-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">

          <button
            onClick={() => setTab("active")}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              tab === "active"
                ? "bg-blue-600"
                : "hover:bg-slate-700 text-slate-400"
            }`}
          >
            Active Assigned Shipments
          </button>

          <button
            onClick={() => setTab("commission")}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              tab === "commission"
                ? "bg-blue-600"
                : "hover:bg-slate-700 text-slate-400"
            }`}
          >
            Commission Earned
          </button>

        </div>

        {/* Active Shipments */}

        {tab === "active" && (
          <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-6">

            <h2 className="text-xl font-bold border-b border-slate-700 pb-2">
              Active Assigned Shipments
            </h2>

            <div className="space-y-4 mt-6">

              {shipments.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex justify-between items-center"
                >
                  <div>

                    <p>
                      <span className="text-slate-400">Order :</span>{" "}
                      {item.id}
                    </p>

                    <p>
                      <span className="text-slate-400">Source :</span>{" "}
                      {item.src}
                    </p>

                    <p>
                      <span className="text-slate-400">
                        Destination :
                      </span>{" "}
                      {item.dest}
                    </p>

                  </div>

                  <button
                    onClick={() => setSelectedShipment(item)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    Action
                  </button>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Commission */}

        {tab === "commission" && (
          <div className="mt-6 space-y-6">

            <div className="bg-blue-950/40 border border-blue-800 rounded-xl p-5 text-xl font-bold text-blue-300">
              Total Commission Earned : ₹{totalCommission}
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-xl font-bold border-b border-slate-700 pb-2">
                Completed Orders
              </h2>

              <div className="space-y-4 mt-5">

                {completedOrders.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4"
                  >
                    <p>Order ID : {item.id}</p>
                    <p>Source : {item.src}</p>
                    <p>Destination : {item.dest}</p>
                    <p>Delivered : {item.date}</p>
                    <p className="text-green-400 font-bold">
                      Commission : ₹{item.commission}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        )}

      </div>

      {/* Popup */}

      {selectedShipment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-[90%] max-w-lg">

            <h2 className="text-xl font-bold mb-5">
              Shipment Details
            </h2>

            <div className="space-y-3">

              <p>Order ID : {selectedShipment.id}</p>

              <p>Source : {selectedShipment.src}</p>

              <p>Destination : {selectedShipment.dest}</p>

              <p>Estimated Delivery : {selectedShipment.eta}</p>

              <p>
                Commission :
                <span className="text-green-400">
                  {" "}
                  ₹{selectedShipment.commission}
                </span>
              </p>

              <div>

                <label className="block mb-2">
                  Delivery Status
                </label>

                <select
                  value={selectedShipment.status}
                  onChange={(e) => updateStatus(e.target.value)}
                  className="w-full bg-slate-700 p-3 rounded"
                >
                  <option>Picked Up</option>
                  <option>In Transit</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                </select>

              </div>

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setSelectedShipment(null)}
                className="bg-slate-700 px-5 py-2 rounded"
              >
                Close
              </button>

              <button
                onClick={() => setSelectedShipment(null)}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Dash;