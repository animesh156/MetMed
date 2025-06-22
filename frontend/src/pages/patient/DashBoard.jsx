import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const items = [
    { name: "Dashboard", icon: MdDashboard, route: "/patient/dashboard" },
    {
      name: "Appointments",
      icon: MdCalendarToday,
      route: "/patient/appointment",
    },
    { name: "Doctors", icon: FaUserDoctor, route: "/patient/doctors" },
    { name: "Settings", icon: IoSettingsOutline, route: "/patient/settings" },
     { name: "Logout", icon: FiLogOut, route: "/" }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-800 border-r h-full overflow-hidden">
        <Sidebar items={items} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 ">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-2">
          Patient Dashboard
        </h1>
        <p className="text-center text-white mb-8">
          Welcome! Manage your appointments, view history, and consult doctors
          easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Upcoming Appointments */}
          <div className="card bg-neutral-800 p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-blue-600 font-semibold mb-3">
              Upcoming Appointments
            </h2>
            <button
              className="btn bg-yellow-400 text-white hover:bg-yellow-500 transition"
              onClick={() => navigate("/patient/appointment")}
            >
              View Now
            </button>
          </div>

          {/* Book New Appointment */}
          <div className="card bg-neutral-800 p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-blue-600 font-semibold mb-3">
              Book New Appointments
            </h2>
            <button
              className="btn bg-green-400 text-white hover:bg-green-500 transition"
              onClick={() => navigate("/patient/doctors")}
            >
              Book Now
            </button>
          </div>

          {/* Last Consulted */}
          <div className="card bg-neutral-800 p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-blue-600 font-semibold mb-3">
              Last Consulted Doctors
            </h2>
            <button
              className="btn bg-purple-400 text-white hover:bg-purple-500 transition"
              onClick={() => navigate("/patient/history")}
            >
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
