import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register" element={<ManagerUser />} />
        <Route path="/register" element={<ManagerShipment />} />
        <Route path="/register" element={<ManagerComplaint />} />
        <Route path="/register" element={<ManagerCity />} />
        <Route path="/register" element={<ManagerPricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;