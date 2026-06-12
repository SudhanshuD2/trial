import { Routes, Route } from "react-router-dom";

import AgentLayout from "../layouts/AgentLayout";

import AgentDashboardPage from "../pages/agent/dashboard/AgentDashboard";

import AgentShipmentWorkspacePage from "../pages/agent/shipments/AgentShipmentWorkspace";

// import AgentComplaintWorkspacePage from "../pages/agent/complaints/AgentComplaintWorkspace";

function AgentRoutes() {
  return (
    <Routes>
      <Route element={<AgentLayout />}>
        <Route index element={<AgentDashboardPage />} />

        <Route
          path="shipments"
          element={<AgentShipmentWorkspacePage />}
        />

      </Route>
    </Routes>
  );
}

export default AgentRoutes;