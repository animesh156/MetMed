import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";

function DashBoard() {
    const items = [
                { name: "Dashboard", icon: MdDashboard },
                { name: "Appointments", icon: MdCalendarToday },
                { name: "Earnings", icon: MdOutlineAttachMoney },
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
        <h1 className="text-3xl font-bold text-center mb-2">Admin Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">
          Welcome, Admin! Here you can manage users, verify doctors, and oversee appointments.
        </p>

        {/* Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {/* Pending Verifications */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Doctors Pending Verification</h2>
            <p className="text-gray-700 mb-3">8 doctors are awaiting approval.</p>
            <button className="btn btn-warning">Verify Now</button>
          </div>

          {/* Total Registered Patients */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Total Patients</h2>
            <p className="text-gray-700 mb-3">532 patients registered on the platform.</p>
            <button className="btn btn-primary">View Patients</button>
          </div>

          {/* Appointment Logs */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">All Appointments</h2>
            <p className="text-gray-700 mb-3">Monitor or export platform-wide bookings.</p>
            <button className="btn btn-primary">View Logs</button>
          </div>

          {/* Revenue */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Platform Revenue</h2>
            <p className="text-gray-700 mb-3">Total collected: ₹2,45,000</p>
            <button className="btn btn-success">View Reports</button>
          </div>

          {/* System Settings */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">System Settings</h2>
            <p className="text-gray-700 mb-3">Manage roles, access, and configurations.</p>
            <button className="btn btn-neutral">Go to Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
