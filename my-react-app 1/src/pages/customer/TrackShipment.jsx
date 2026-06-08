function TrackShipment() {
    return (
        <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-stone-800 border-b border-stone-200 pb-2">
                Active Shipment
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm bg-stone-100/50 p-4 rounded-2xl border border-stone-200">
                <p><strong className="text-stone-500">ID:</strong> SHP10245</p>
                <p>
                    <strong className="text-stone-500">Status:</strong>{" "}
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-700 border border-amber-500/30">
                        In Transit
                    </span>
                </p>
                <p><strong className="text-stone-500">Source:</strong> Mumbai</p>
                <p><strong className="text-stone-500">Destination:</strong> Delhi</p>
                <p><strong className="text-stone-500">Weight:</strong> 15 Kg</p>
                <p><strong className="text-stone-500">Packaging:</strong> Box Packaging</p>
                <p className="sm:col-span-2 lg:col-span-3">
                    <strong className="text-stone-500">Description:</strong> Electronics
                </p>
                <p><strong className="text-stone-500">Arrival:</strong> 20 June 2026</p>
                <p><strong className="text-stone-500">Agent:</strong> Rahul Sharma</p>
                <p><strong className="text-stone-500">Contact:</strong> +91 9876543210</p>
            </div>

            {/* Stepper Status Line */}
            <div className="p-4 bg-stone-100 border border-stone-200 rounded-2xl flex flex-wrap justify-between items-center text-xs sm:text-sm font-medium gap-2">
                <span className="text-green-600">Ordered ✓</span>
                <span className="text-slate-500">→</span>
                <span className="text-green-600">Dispatched ✓</span>
                <span className="text-slate-500">→</span>
                <span className="text-amber-700 font-bold bg-amber-100 px-2 py-1 rounded border border-amber-200 animate-pulse">
                    In Transit 📦
                </span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-500">Delivered</span>
            </div>
        </div>
    );
}

export default TrackShipment;