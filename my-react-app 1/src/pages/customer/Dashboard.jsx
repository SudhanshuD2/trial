import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import CreateShipment from "./CreateShipment";
import TrackShipment from "./TrackShipment";
import RaiseComplaint from "./RaiseComplaint";

function Dashboard() {
    const [tab, setTab] = useState("shipment");
    const [weight, setWeight] = useState(10);

    const estimatedCost = weight * 15 + 100;

    return (
        <div className="min-h-screen bg-stone-100 font-sans relative overflow-hidden flex flex-col">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-300 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Top Main Navigation Header */}
            <DashboardHeader />

            {/* Main Structural Wrapper Layout Container */}
            <div className="flex flex-col md:flex-row flex-1 relative z-10">

                {/* Left Side Menu Sidebar */}
                <DashboardSidebar tab={tab} setTab={setTab} />

                {/* Dynamic Panel Workspace Panels Content Area */}
                <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
                    {tab === "shipment" && (
                        <CreateShipment
                            weight={weight}
                            setWeight={setWeight}
                            estimatedCost={estimatedCost}
                        />
                    )}

                    {tab === "track" && <TrackShipment />}

                    {tab === "complaint" && <RaiseComplaint />}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;