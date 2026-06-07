import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DeliveryAgentDashboard from "./pages/deliveryAgent/DeliveryAgentDashboard";
import ActionScreen from "./pages/deliveryAgent/ActionScreen";
import Shipments from "./pages/deliveryAgent/Shipments";
import ManagerUser from "./pages/admin/ManagerUser";
import ManagerShipment from "./pages/admin/ManagerShipment";
import ManagerComplaint from "./pages/admin/ManagerComplaint";
import ManagerPricing from "./pages/admin/ManagerPricing";
import ManagerCity from "./pages/admin/ManagerCity";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement/>} />
        <Route path="/agent-dashboard" element={<DeliveryAgentDashboard />} />
        <Route path="/admin/cities" element={<CityManagement />} />
        <Route path="/admin/agents" element={<AgentManagement />}/>
        <Route path="/admin/shipments" element={<ShipmentManagement />}/>
        <Route path="/admin/complaints" element={<ManageComplaints />}/>
        <Route path="/admin/pricing" element={<PricingRules />}/>
        <Route path="/action-screen" element={<ActionScreen />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/user-manager" element={<UserManagement />} />
        <Route path="/shipment-manager" element={<ManagerShipment />} />
        <Route path="/complaint-manager" element={<ManagerComplaint />} />
        <Route path="/pricing-manager" element={<ManagerPricing />} />
        {/* <Route path="/city-manager" element={<ManagerCity />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;