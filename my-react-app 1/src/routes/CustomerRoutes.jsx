import { Routes, Route } from "react-router-dom";

import CustomerLayout from "../layouts/CustomerLayout";

import CustomerDashboardPage from "../pages/customer/dashboard/CustomerDashboard";

import ShipmentBookingPage from "../pages/customer/shipments/ShipmentBooking";

import MyShipmentsPage from "../pages/customer/shipments/MyShipments";

function CustomerRoutes() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route index element={<CustomerDashboardPage />} />

        <Route
          path="book-shipment"
          element={<ShipmentBookingPage />}
        />

        <Route
          path="shipments"
          element={<MyShipmentsPage />}
        />
      </Route>
    </Routes>
  );
}

export default CustomerRoutes;