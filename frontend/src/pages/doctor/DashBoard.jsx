import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard, MdCalendarToday, MdOutlineAttachMoney } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function DoctorDashboard() {
  const navigate = useNavigate();

  const items = [
    { name: "Dashboard", icon: MdDashboard },
    { name: "Appointments", icon: MdCalendarToday, route: "/doctor/schedule" },
    { name: "Earnings", icon: MdOutlineAttachMoney, route: "/doctor/earning" },
    { name: "Profile", icon: CgProfile, route: "/doctor/profile" },
    { name: "Settings", icon: IoSettingsOutline, route: "/doctor/settings" },
    { name: "Logout", icon: FiLogOut, route: "/" }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-800 border-r border-neutral-700 h-full overflow-hidden">
        <Sidebar items={items} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-neutral-900">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-2">Doctor Dashboard</h1>
        <p className="text-center text-gray-400 mb-8">
          Welcome, Doctor! Manage appointments, consult patients, and track your performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Cards */}
          <div className="bg-neutral-800 p-5 rounded shadow hover:shadow-md transition border border-neutral-700">
            <h2 className="text-xl font-semibold mb-3 text-white">Today's Appointments</h2>
            <p className="text-gray-400 mb-3">5 patients scheduled</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
              onClick={() => navigate('/doctor/schedule')}
            >
              View Schedule
            </button>
          </div>

          <div className="bg-neutral-800 p-5 rounded shadow hover:shadow-md transition border border-neutral-700">
            <h2 className="text-xl font-semibold mb-3 text-white">Live Consultation</h2>
            <p className="text-gray-400 mb-3">Start a video session with your next patient.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
              Start Now
            </button>
          </div>

          <div className="bg-neutral-800 p-5 rounded shadow hover:shadow-md transition border border-neutral-700">
            <h2 className="text-xl font-semibold mb-3 text-white">Consultation History</h2>
            <p className="text-gray-400 mb-3">Access past patient records and notes.</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
              onClick={() => navigate('/doctor/history')}
            >
              View History
            </button>
          </div>

          <div className="bg-neutral-800 p-5 rounded shadow hover:shadow-md transition border border-neutral-700">
            <h2 className="text-xl font-semibold mb-3 text-white">Set Availability</h2>
            <p className="text-gray-400 mb-3">Update your weekly consultation slots.</p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition"
              onClick={() => navigate('/doctor/availability')}
            >
              Update Slots
            </button>
          </div>

          <div className="bg-neutral-800 p-5 rounded shadow hover:shadow-md transition border border-neutral-700">
            <h2 className="text-xl font-semibold mb-3 text-white">My Earnings</h2>
            <p className="text-gray-400 mb-3">₹84,000 earned this month</p>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
              onClick={() => navigate('/doctor/earning')}
            >
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
