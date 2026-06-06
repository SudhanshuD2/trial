import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage({ onLogin, onRegister }) {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-stone-100 font-sans relative overflow-hidden text-stone-800">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Navigation Header */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 fixed w-full top-0 z-50 shadow-sm">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-amber-600 tracking-wide flex items-center gap-2">
                        📦 Logistics
                    </h1>

                    {/* Desktop Navigation with refined spacing updates */}
                    <div className="hidden md:flex items-center space-x-10 font-medium text-stone-600">
                        <div className="flex items-center space-x-8">
                            <a href="#features" className="hover:text-amber-600 transition">Features</a>
                            <a href="#stats" className="hover:text-amber-600 transition">Our Impact</a>
                        </div>

                        {/* Distinct separation wrapper for auth actions */}
                        <div className="flex items-center space-x-4 pl-4 border-l border-stone-200">
                            <button
                                onClick={() => navigate("/login")}
                                className="px-5 py-2.5 bg-stone-50 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl border border-stone-200 transition duration-300"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/register")}
                                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 font-semibold rounded-xl shadow-md shadow-amber-200 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-stone-600 text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 p-4 flex flex-col space-y-4 shadow-xl">
                        <a href="#features" onClick={() => setMobileMenuOpen(false)} className="font-medium text-stone-600">Features</a>
                        <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="font-medium text-stone-600">Our Impact</a>
                        <hr className="border-stone-100" />
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                navigate("/login");
                            }}
                            className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl transition"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                navigate("/register");
                            }}
                            className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-md"
                        >
                            Register
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-full">
                        ✨ Next-Gen Supply Chain Ecosystem
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
                        Smart Logistics, <br />
                        <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Seamless Tracking.</span>
                    </h2>
                    <p className="text-stone-600 text-lg max-w-2xl mx-auto lg:mx-0">
                        Streamline your delivery pipeline from booking to arrival. Estimate freight costs instantly, monitor high-priority transits live, and manage complaints efficiently from a unified control panel.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                        <a
                            href="#features"
                            className="px-8 py-3.5 bg-white border border-stone-200 hover:bg-stone-50 font-bold rounded-2xl shadow-sm text-center transition duration-200"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>

                {/* Replaced Mock UI with an elegant image container */}
                <div className="flex-1 w-full max-w-md lg:max-w-none relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition duration-300" />
                    <div className="relative bg-white/70 backdrop-blur-md p-3 rounded-3xl border border-stone-200 shadow-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                            alt="Logistics and Freight Hub"
                            className="w-full h-72 sm:h-80 object-cover rounded-2xl grayscale-[20%] contrast-[105%] group-hover:scale-[1.02] transition duration-500"
                        />
                    </div>
                </div>
            </section>

            <hr className="max-w-6xl mx-auto border-stone-200" />

            {/* Core Ecosystem Modules */}
            <section id="features" className="py-20 max-w-6xl mx-auto px-4 space-y-12">
                <div className="text-center space-y-4">
                    <h3 className="text-3xl font-bold text-stone-900">Engineered for Performance</h3>
                    <p className="text-stone-600 max-w-xl mx-auto">Everything you need to optimize freight operations, organized into clean, intuitive modules.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                            🏷️
                        </div>
                        <h4 className="text-lg font-bold mt-4 mb-2 text-stone-900">Instant Freight Booking</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Input weight parameters, destination nodes, and dynamic packaging types to instantly compute absolute transparent shipping quotes.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                            📍
                        </div>
                        <h4 className="text-lg font-bold mt-4 mb-2 text-stone-900">Live Pulse Timeline</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Track multi-stage deliveries via beautiful step-indicators detailing node transitions, agent contacts, and estimated dates.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                            🎫
                        </div>
                        <h4 className="text-lg font-bold mt-4 mb-2 text-stone-900">Resolution Center</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Log complaints instantly for specific package indices. Audit tickets across status variations like "Under Review" to "Resolved".
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust & Metrics Section */}
            <section id="stats" className="bg-stone-200/50 border-y border-stone-200 py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-1">
                        <p className="text-3xl sm:text-4xl font-black text-amber-600">99.4%</p>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">On-Time Deliveries</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-3xl sm:text-4xl font-black text-amber-600">1.2M+</p>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">Packages Moved</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-3xl sm:text-4xl font-black text-amber-600">&lt; 4 Hrs</p>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">Ticket Resolution</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-3xl sm:text-4xl font-black text-amber-600">₹0</p>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">Hidden Fees</p>
                    </div>
                </div>
            </section>

            {/* Bottom Footer Call To Action */}
            <footer className="py-12 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-stone-200 mt-12 text-sm text-stone-500">
                <p>© 2026 Logistics Inc.</p>
            </footer>
        </div>
    );
}

export default LandingPage;