function AssignedDelivery({ shipments, onActionClick }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold border-b border-stone-200 text-stone-800 pb-2 mb-6">
        Active Assigned Shipments
      </h2>

      <div className="space-y-4">
        {shipments.map((item) => (
          <div
            key={item.id}
            className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition hover:shadow-sm"
          >
            <div className="space-y-1">
              <p className="font-medium text-stone-800">
                <span className="text-stone-400 font-normal">Order:</span> {item.id}
              </p>
              <p className="text-stone-600 text-sm">
                <span className="text-stone-400">Source:</span> {item.src}
              </p>
              <p className="text-stone-600 text-sm">
                <span className="text-stone-400">Destination:</span> {item.dest}
              </p>
              <p className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full inline-block mt-1">
                {item.status}
              </p>
            </div>

            <button
              onClick={() => onActionClick(item)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 px-5 py-2 rounded-xl text-sm font-medium transition shadow-sm self-start sm:self-center"
            >
              Action
            </button>
          </div>
        ))}

        {shipments.length === 0 && (
          <p className="text-stone-500 text-center py-6">No active shipments assigned.</p>
        )}
      </div>
    </div>
  );
}

export default AssignedDelivery;