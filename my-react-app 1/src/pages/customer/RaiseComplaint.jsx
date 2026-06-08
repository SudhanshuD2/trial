function RaiseComplaint() {
    return (
        <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-stone-800 border-b border-stone-200 pb-2">
                Raise Complaint
            </h2>

            <div className="space-y-4 max-w-xl">
                <input
                    defaultValue="SHP10245"
                    placeholder="Order ID"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    rows="4"
                    placeholder="Complaint Description"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-90 font-semibold rounded-lg shadow transition">
                    Submit Ticket
                </button>
            </div>

            <hr className="border-stone-200" />

            <h3 className="text-lg font-bold text-stone-800">Previous Complaints</h3>

            <div className="space-y-3">
                <div className="p-4 bg-stone-100 border border-stone-200 rounded-2xl flex justify-between items-center">
                    <p className="font-semibold text-stone-800">Ticket #T101</p>
                    <p className="text-sm px-2 py-0.5 rounded bg-green-500/20 text-green-700 border border-green-500/30">
                        Resolved ✅
                    </p>
                </div>

                <div className="p-4 bg-stone-100 border border-stone-200 rounded-2xl flex justify-between items-center">
                    <p className="font-semibold text-stone-800">Ticket #T102</p>
                    <p className="text-sm px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 border border-amber-500/30">
                        Under Review ⏳
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RaiseComplaint;