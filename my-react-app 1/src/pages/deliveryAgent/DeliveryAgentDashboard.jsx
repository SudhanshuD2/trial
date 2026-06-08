import { useState } from "react";
import DeliveryAgentHeader from "./DeliveryAgentHeader";
import DeliveryAgentSidebar from "./DeliveryAgentSidebar";
import AssignedDelivery from "./AssignedDelivery";
import StatusOverlay from "./StatusOverlay";

function DeliveryAgentDashboard() {
  const [tab, setTab] = useState("active");
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

  const handleStatusChangeInModal = (newValue) => {
    setSelectedShipment({
      ...selectedShipment,
      status: newValue,
    });
  };

  const handleSaveStatus = () => {
    setShipments(
      shipments.map((s) =>
        s.id === selectedShipment.id ? { ...s, status: selectedShipment.status } : s
      )
    );
    setSelectedShipment(null);
  };

  return (
    <div className="min-h-screen bg-stone-100 relative overflow-hidden flex flex-col">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-300 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Header View */}
      <DeliveryAgentHeader />

      {/* Main Container Wrapper */}
      <div className="flex flex-col md:flex-row flex-1 relative z-10">
        {/* Sidebar View */}
        <DeliveryAgentSidebar tab={tab} setTab={setTab} />

        {/* Dashboard Dynamic Viewing Context Panels */}
        <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
          {tab === "active" && (
            <AssignedDelivery
              shipments={shipments}
              onActionClick={(item) => setSelectedShipment(item)}
            />
          )}

          {tab === "commission" && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xl font-bold text-amber-700 shadow-sm">
                Total Commission Earned : ₹{totalCommission}
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold border-b border-stone-200 text-stone-800 pb-2 mb-5">
                  Completed Orders
                </h2>

                <div className="space-y-4">
                  {completedOrders.map((item) => (
                    <div
                      key={item.id}
                      className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-800"
                    >
                      <p className="font-semibold">Order ID : {item.id}</p>
                      <p className="text-sm text-stone-600">Source : {item.src}</p>
                      <p className="text-sm text-stone-600">Destination : {item.dest}</p>
                      <p className="text-sm text-stone-600">Delivered : {item.date}</p>
                      <p className="text-amber-600 font-bold mt-1">
                        Commission : ₹{item.commission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Status Overlay Modal */}
      <StatusOverlay
        selectedShipment={selectedShipment}
        onClose={() => setSelectedShipment(null)}
        onStatusChange={handleStatusChangeInModal}
        onSave={handleSaveStatus}
      />
    </div>
  );
}

export default DeliveryAgentDashboard;