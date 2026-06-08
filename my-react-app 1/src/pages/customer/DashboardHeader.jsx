import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center shadow-lg relative z-50">
            <h1 className="text-2xl font-bold text-amber-600 tracking-wide">
                Logistics Dashboard
            </h1>

            <div className="flex items-center gap-4">
                {/* Functional Logout Action Button */}
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-stone-50 hover:bg-stone-200 text-stone-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-stone-200 shadow-sm transition duration-200"
                >
                    Logout
                </button>

                {/* Profile Dropdown Wrapper */}
                <div className="relative">
                    <button
                        className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center text-xl shadow transition"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        👤
                    </button>

                    {showProfile && (
                        <div className="absolute right-0 mt-3 w-72 bg-stone-100 border border-stone-200 rounded-2xl p-4 shadow-2xl z-50 space-y-3">
                            <h3 className="text-md font-bold text-stone-800 border-b border-stone-200 pb-2">
                                My Profile
                            </h3>
                            <input
                                defaultValue="John Doe"
                                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                            />
                            <input
                                defaultValue="john@email.com"
                                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                            />
                            <input
                                defaultValue="+91 9876543210"
                                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                            />

                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 text-xs py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-90 rounded font-medium transition">
                                    Edit
                                </button>
                                <button className="flex-1 text-xs py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded font-medium transition">
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;