function StatusOverlay({ selectedShipment, onClose, onSave, onStatusChange }) {
  if (!selectedShipment) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 w-full max-w-lg shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        <h2 className="text-xl font-bold text-stone-800 mb-5">
          Shipment Details
        </h2>

        <div className="space-y-3 text-stone-700">
          <p><span className="font-semibold text-stone-500">Order ID:</span> {selectedShipment.id}</p>
          <p><span className="font-semibold text-stone-500">Source:</span> {selectedShipment.src}</p>
          <p><span className="font-semibold text-stone-500">Destination:</span> {selectedShipment.dest}</p>
          <p><span className="font-semibold text-stone-500">Estimated Delivery:</span> {selectedShipment.eta}</p>
          <p>
            <span className="font-semibold text-stone-500">Commission:</span>
            <span className="text-green-600 font-bold"> ₹{selectedShipment.commission}</span>
          </p>

          <div className="pt-2">
            <label className="block mb-2 font-medium text-stone-800">
              Delivery Status
            </label>
            <select
              value={selectedShipment.status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 text-stone-800 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Picked Up">Picked Up</option>
              <option value="In Transit">In Transit</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 border-t border-stone-100 pt-4">
          <button
            onClick={onClose}
            className="bg-stone-100 text-stone-700 hover:bg-stone-200 px-5 py-2 rounded-xl font-medium transition"
          >
            Close
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-xl font-medium transition shadow-md shadow-blue-600/10"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusOverlay;