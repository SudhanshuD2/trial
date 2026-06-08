import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/customer/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DeliveryAgentDashboard from "./pages/deliveryAgent/DeliveryAgentDashboard";
import Shipments from "./pages/deliveryAgent/AssignedDelivery";
import ManagerShipment from "./pages/admin/ShipmentManagement";
import ManagerComplaint from "./pages/admin/ManageComplaints";
import ManagerPricing from "./pages/admin/PricingRules";
import CityManagement from "./pages/admin/CityManagement";
import UserManagement from "./pages/admin/UserManagement";
import AgentManagement from "./pages/admin/AgentManagement";
import ShipmentManagement from "./pages/admin/ShipmentManagement";
import ManageComplaints from "./pages/admin/ManageComplaints";
import PricingRules from "./pages/admin/PricingRules";
import LandingPage from "./pages/LandingPage";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/agent-dashboard" element={<DeliveryAgentDashboard />} />
        <Route path="/admin/cities" element={<CityManagement />} />
        <Route path="/admin/agents" element={<AgentManagement />} />
        <Route path="/admin/shipments" element={<ShipmentManagement />} />
        <Route path="/admin/complaints" element={<ManageComplaints />} />
        <Route path="/admin/pricing" element={<PricingRules />} />
        <Route path="/shipments" element={<Shipments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;