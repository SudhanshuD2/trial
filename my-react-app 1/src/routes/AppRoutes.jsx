// routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/auth/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import CustomerRoutes from "./CustomerRoutes";
import AgentRoutes from "./AgentRoutes";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      {/* Role Based Routes */}

      <Route path="/customer/*" element={<CustomerRoutes />} />

      <Route path="/agent/*" element={<AgentRoutes />} />

      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* 404 */}

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;