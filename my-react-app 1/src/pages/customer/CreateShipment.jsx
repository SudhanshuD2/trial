function CreateShipment({ weight, setWeight, estimatedCost }) {
    return (
        <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-stone-800 border-b border-stone-200 pb-2">
                Create Shipment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    defaultValue="Mumbai"
                    placeholder="Source City"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    defaultValue="Delhi"
                    placeholder="Destination City"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Box Packaging</option>
                    <option>Fragile Packaging</option>
                    <option>Wooden Crate</option>
                </select>

                <textarea
                    rows="4"
                    defaultValue="Electronics shipment"
                    className="w-full md:col-span-2 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl font-semibold text-amber-900">
                Estimated Cost: ₹{estimatedCost}
            </div>

            <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-amber-200 shadow-md font-semibold rounded-lg transition">
                Book Shipment
            </button>
        </div>
    );
}

export default CreateShipment;