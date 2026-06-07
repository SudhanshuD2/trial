import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function DeliveryAgentDashboard() {
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
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-stone-100 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-300 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      {/* Header */}

      <div className="bg-white/80 backdrop-blur-md border-stone-200 px-6 py-4 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-bold text-amber-600">
          Delivery Agent Dashboard
        </h1>
        <div className="flex items-center gap-4">

          {/* Functional Logout Action Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-stone-50 hover:bg-stone-200 text-stone-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-stone-200 shadow-sm transition duration-200"
          >
            Logout
          </button>
          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center"
            >
              👤
            </button>

            {showProfile && (
              <div className="fixed z-200 right-0 top-12 z-[9999] w-72 bg-white border border-stone-200 rounded-xl p-4 shadow-2xl space-y-3">

                <h3 className="font-bold border-b border-stone-200 text-stone-800 pb-2">
                  Agent Profile
                </h3>

                <input
                  defaultValue="Rahul Sharma"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-stone-800 rounded"
                />

                <input
                  defaultValue="rahul@logistics.com"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-stone-800 rounded"
                />

                <input
                  defaultValue="+91 9876543210"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-stone-800 rounded"
                />

                <div className="flex gap-2">

                  <button className="flex-1 bg-blue-600 py-2 rounded">
                    Edit
                  </button>

                  <button className="flex-1 bg-amber-500 py-2 rounded">
                    Reset
                  </button>

                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          {/* <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl p-5">
            <p className="text-stone-400 text-sm">Assigned Shipments</p>
            <h3 className="text-3xl font-bold text-stone-800">
              {shipments.length}
            </h3>
          </div> */}

          {/* <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl p-5">
            <p className="text-stone-400 text-sm">Completed Orders</p>
            <h3 className="text-3xl font-bold text-amber-600">
              {completedOrders.length}
            </h3>
          </div> */}

          {/* <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl p-5">
            <p className="text-stone-400 text-sm">Commission Earned</p>
            <h3 className="text-3xl font-bold text-amber-600">
              ₹{totalCommission}
            </h3>
          </div> */}

        </div>

        <div className="flex space-x-2 bg-white p-1.5 rounded-xl border border-stone-200">

          <button
            onClick={() => setTab("active")}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${tab === "active"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              : "hover:bg-stone-100 text-stone-500"
              }`}
          >
            Active Assigned Shipments
          </button>

          <button
            onClick={() => setTab("commission")}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${tab === "commission"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              : "hover:bg-stone-100 text-stone-500"
              }`}
          >
            Commission Earned
          </button>

        </div>

        {/* Active Shipments */}

        {tab === "active" && (
          <div className="mt-6 bg-white border border-stone-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold border-b border-stone-200 text-stone-800 pb-2">
              Active Assigned Shipments
            </h2>

            <div className="space-y-4 mt-6">

              {shipments.map((item) => (
                <div
                  key={item.id}
                  className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex justify-between items-center"
                >
                  <div>

                    <p>
                      <span className="text-stone-500">Order :</span>{" "}
                      {item.id}
                    </p>

                    <p>
                      <span className="text-stone-500">Source :</span>{" "}
                      {item.src}
                    </p>

                    <p>
                      <span className="text-stone-500">
                        Destination :
                      </span>{" "}
                      {item.dest}
                    </p>

                  </div>

                  <button
                    onClick={() => setSelectedShipment(item)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
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

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xl font-bold text-amber-700">
              Total Commission Earned : ₹{totalCommission}
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6">

              <h2 className="text-xl font-bold border-b border-stone-200 text-stone-800 pb-2">
                Completed Orders
              </h2>

              <div className="space-y-4 mt-5">

                {completedOrders.map((item) => (
                  <div
                    key={item.id}
                    className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-800"
                  >
                    <p>Order ID : {item.id}</p>
                    <p>Source : {item.src}</p>
                    <p>Destination : {item.dest}</p>
                    <p>Delivered : {item.date}</p>
                    <p className="text-amber-600 font-bold">
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white border border-stone-200 rounded-2xl p-6 w-[90%] max-w-lg">

            <h2 className="text-xl font-bold text-stone-800 mb-5">
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
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 p-3 rounded-xl"
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
                className="bg-amber-500 px-5 py-2 rounded"
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

export default DeliveryAgentDashboard;