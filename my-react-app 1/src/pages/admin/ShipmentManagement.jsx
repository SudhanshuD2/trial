// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import DashboardHeader from "../../components/DashboardHeader";
// import {
//   Package,
//   CheckCircle,
//   Clock,
//   AlertTriangle,
//   Filter,
//   Plus,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const shipments = [
//   {
//     id: "LX-9948210",
//     creator: "John Doe",
//     source: "Chicago North",
//     destination: "Los Angeles Port",
//     status: "Delivered",
//   },
//   {
//     id: "LX-9948552",
//     creator: "Jane Smith",
//     source: "Houston Central",
//     destination: "Miami Gateway",
//     status: "In Transit",
//   },
//   {
//     id: "LX-9948119",
//     creator: "Robert Wilson",
//     source: "Newark Hub",
//     destination: "Seattle Terminal",
//     status: "Delayed",
//   },
//   {
//     id: "LX-9947002",
//     creator: "Sarah Chen",
//     source: "San Diego Port",
//     destination: "Phoenix Yard",
//     status: "Cancelled",
//   },
// ];

// const getStatusBadge = (status) => {
//   switch (status) {
//     case "Delivered":
//       return "bg-emerald-100 text-emerald-700";
//     case "In Transit":
//       return "bg-indigo-100 text-indigo-700";
//     case "Delayed":
//       return "bg-amber-100 text-amber-700";
//     case "Cancelled":
//       return "bg-rose-100 text-rose-700";
//     default:
//       return "bg-slate-100 text-slate-700";
//   }
// };

// const ShipmentManagement = () => {
//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <DashboardHeader title="Shipment Management" />

//         <main className="p-8">
//           {/* Stats */}
//           <section className="mb-8">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6">
//               Operations Overview
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//               {/* Total Shipments */}
//               <div className="bg-white rounded-xl shadow-sm p-6 text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-indigo-100 rounded-xl">
//                     <Package className="h-6 w-6 text-indigo-600" />
//                   </div>
//                 </div>

//                 <p className="text-xs font-bold text-slate-500 uppercase">
//                   Total Shipments
//                 </p>

//                 <h3 className="text-3xl font-bold mt-2">12,842</h3>
//               </div>

//               {/* Success Rate */}
//               <div className="bg-white rounded-xl shadow-sm p-6 text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-amber-100 rounded-xl">
//                     <CheckCircle className="h-6 w-6 text-amber-600" />
//                   </div>
//                 </div>

//                 <p className="text-xs font-bold text-slate-500 uppercase">
//                   Shipment Success
//                 </p>

//                 <h3 className="text-3xl font-bold mt-2">98.4%</h3>
//               </div>

//               {/* Agents */}
//               <div className="bg-white rounded-xl shadow-sm p-6 text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-emerald-100 rounded-xl">
//                     <Clock className="h-6 w-6 text-emerald-600" />
//                   </div>
//                 </div>

//                 <p className="text-xs font-bold text-slate-500 uppercase">
//                   On-duty Agents
//                 </p>

//                 <h3 className="text-3xl font-bold mt-2">156</h3>
//               </div>

//               {/* Complaints */}
//               <div className="bg-white rounded-xl shadow-sm p-6 text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-rose-100 rounded-xl">
//                     <AlertTriangle className="h-6 w-6 text-rose-600" />
//                   </div>
//                 </div>

//                 <p className="text-xs font-bold text-slate-500 uppercase">
//                   Open Complaints
//                 </p>

//                 <h3 className="text-3xl font-bold mt-2">24</h3>
//               </div>
//             </div>
//           </section>

//           {/* Shipment Table */}
//           <section className="bg-white rounded-xl shadow-sm overflow-hidden">
//             <div className="p-6 border-b flex items-center justify-between">
//               <h3 className="font-bold text-lg">Shipments</h3>

//               <div className="flex items-center gap-3">
//                 <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50">
//                   <Filter size={16} />
//                   Filter
//                 </button>

//                 <button className="px-4 py-2 border rounded-lg hover:bg-slate-50">
//                   Status: All
//                 </button>

//                 <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">
//                   <Plus size={16} />
//                   Create Shipment
//                 </button>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-slate-50 text-xs uppercase text-slate-500">
//                   <tr>
//                     <th className="px-6 py-4 text-left">SR NO.</th>
//                     <th className="px-6 py-4 text-left">SHIPMENT ID</th>
//                     <th className="px-6 py-4 text-left">CREATOR</th>
//                     <th className="px-6 py-4 text-left">SOURCE</th>
//                     <th className="px-6 py-4 text-left">DESTINATION</th>
//                     <th className="px-6 py-4 text-left">STATUS</th>
//                     <th className="px-6 py-4 text-left">ACTION</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {shipments.map((shipment, index) => (
//                     <tr
//                       key={shipment.id}
//                       className="border-t hover:bg-slate-50"
//                     >
//                       <td className="px-6 py-4">{index + 1}</td>

//                       <td className="px-6 py-4 font-semibold text-indigo-600">
//                         {shipment.id}
//                       </td>

//                       <td className="px-6 py-4">{shipment.creator}</td>

//                       <td className="px-6 py-4 text-slate-600">
//                         {shipment.source}
//                       </td>

//                       <td className="px-6 py-4 text-slate-600">
//                         {shipment.destination}
//                       </td>

//                       <td className="px-6 py-4">
//                         <span
//                           className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusBadge(
//                             shipment.status
//                           )}`}
//                         >
//                           {shipment.status}
//                         </span>
//                       </td>

//                       <td className="px-6 py-4">
//                         <button className="text-indigo-600 font-semibold hover:underline">
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="p-6 border-t flex justify-between items-center">
//               <p className="text-sm text-slate-500">
//                 Showing 1 to 4 of 48 shipments
//               </p>

//               <div className="flex items-center gap-2">
//                 <button className="p-2 border rounded-lg">
//                   <ChevronLeft size={16} />
//                 </button>

//                 <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white text-sm">
//                   1
//                 </button>

//                 <button className="w-8 h-8 rounded-lg border text-sm">
//                   2
//                 </button>

//                 <button className="w-8 h-8 rounded-lg border text-sm">
//                   3
//                 </button>

//                 <button className="p-2 border rounded-lg">
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ShipmentManagement;
import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";

const shipments = [
  {
    id: "SH-001XA",
    creator: "ABC",
    source: "Delhi",
    destination: "Mumbai",
    agent: "John Smith",
    status: "Delivered",
  },
  {
    id: "SH-0032XB",
    creator: "XYZ",
    source: "Chennai",
    destination: "Delhi",
    agent: "Emma Wilson",
    status: "In Transit",
  },
  {
    id: "SH-003XC",
    creator: "Robert Wilson",
    source: "Newark Hub",
    destination: "Indore",
    agent: "Michael Brown",
    status: "Delayed",
  },
  {
    id: "SH-004DX",
    creator: "Sarah Chen",
    source: "Pune",
    destination: "Bhopal",
    agent: "Sarah Davis",
    status: "Cancelled",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-emerald-100 text-emerald-700";
    case "In Transit":
      return "bg-indigo-100 text-indigo-700";
    case "Delayed":
      return "bg-amber-100 text-amber-700";
    case "Cancelled":
      return "bg-rose-100 text-rose-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const ShipmentManagement = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader title="Shipment Management" />

        <main className="flex-1 p-8 bg-slate-50">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Manage Shipments
            </h2>

            <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-700 hover:text-white rounded-lg font-bold text-sm transition">
              <Plus size={16} />
              Create Shipment
            </button>
          </div>

          {/* Table */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">SR NO.</th>
                    <th className="px-6 py-4">SHIPMENT ID</th>
                    <th className="px-6 py-4">SHIPMENT CREATOR</th>
                    <th className="px-6 py-4">SOURCE</th>
                    <th className="px-6 py-4">DESTINATION</th>
                    <th className="px-6 py-4">AGENT</th>
                    <th className="px-6 py-4">STATUS</th>
                    <th className="px-6 py-4">ACTIONS</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-sm">
                  {shipments.map((shipment, index) => (
                    <tr
                      key={shipment.id}
                      className="hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4">{index + 1}</td>

                      <td className="px-6 py-4 font-bold text-indigo-600">
                        {shipment.id}
                      </td>

                      <td className="px-6 py-4">{shipment.creator}</td>

                      <td className="px-6 py-4 text-slate-500">
                        {shipment.source}
                      </td>

                      <td className="px-6 py-4 text-slate-500">
                        {shipment.destination}
                      </td>

                      <td className="px-6 py-4 text-slate-500">
                        {shipment.agent}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-lg text-[10px] uppercase font-bold ${getStatusColor(
                            shipment.status
                          )}`}
                        >
                          {shipment.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button className="text-indigo-600 font-semibold hover:underline">
                            View
                          </button>

                          <button className="flex items-center gap-1 text-slate-400 hover:text-indigo-600">
                            <Pencil size={15} />
                            <span className="text-xs">Status</span>
                          </button>

                          <button className="text-slate-400 hover:text-red-500">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-500 font-medium">
                Showing 1 to 4 of 48 shipments
              </p>

              <div className="flex items-center gap-2">
                <button className="p-2 border border-slate-200 rounded-lg">
                  <ChevronLeft size={16} />
                </button>

                <button className="w-8 h-8 bg-indigo-600 text-white text-xs font-bold rounded-lg">
                  1
                </button>

                <button className="w-8 h-8 border rounded-lg text-xs">
                  2
                </button>

                <button className="w-8 h-8 border rounded-lg text-xs">
                  3
                </button>

                <button className="p-2 border border-slate-200 rounded-lg">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ShipmentManagement;