import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";


function DashBoard() {
   
    const items = [
        { name: "Dashboard", icon: MdDashboard },
        { name: "Appointments", icon: MdCalendarToday },
        { name: "Doctors", icon: FaUserDoctor },
        { name: "Settings", icon: IoSettingsOutline },
        { name: "Logout", icon: FiLogOut }
    ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r h-full overflow-hidden">
        <Sidebar items={items} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-2">Patient Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">
          Welcome! Manage your appointments, view history, and consult doctors easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Upcoming Appointments */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Upcoming Appointments</h2>
            <button className="btn btn-primary">View Now</button>
          </div>

          {/* Book New Appointment */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Book New Appointments</h2>
            <button className="btn btn-primary">Book Now</button>
          </div>

          {/* Last Consulted */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Last Consulted Doctors</h2>
            <button className="btn btn-primary">View History</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
