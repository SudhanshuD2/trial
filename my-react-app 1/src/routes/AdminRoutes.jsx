import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboardPage from "../pages/admin/dashboard/AdminDashboard";

import CustomerManagementPage from "../pages/admin/customers/CustomerManagement";

import AgentManagementPage from "../pages/admin/agents/AgentManagement";

import ShipmentManagementPage from "../pages/admin/shipments/ShipmentManagement";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />

        <Route
          path="customers"
          element={<CustomerManagementPage />}
        />

        <Route
          path="agents"
          element={<AgentManagementPage />}
        />

        <Route
          path="shipments"
          element={<ShipmentManagementPage />}
        />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;