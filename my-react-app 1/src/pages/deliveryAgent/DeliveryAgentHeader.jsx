import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeliveryAgentHeader() {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-40">
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

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfile(!showProfile)}
                        className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center text-lg"
                    >
                        👤
                    </button>

                    {showProfile && (
                        <div className="absolute right-0 top-12 w-72 bg-white border border-stone-200 rounded-xl p-4 shadow-2xl space-y-3 z-50">
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
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                                    Edit
                                </button>
                                <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded transition">
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeliveryAgentHeader;