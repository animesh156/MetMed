import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function DoctorDashboard() {

  const navigate = useNavigate();

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

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <h1 className="text-3xl text-black font-bold text-center mb-2">Doctor Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">
          Welcome, Doctor! Manage appointments, consult patients, and track your performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Cards */}
          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-black font-semibold mb-3">Today's Appointments</h2>
            <p className="text-gray-700 mb-3">5 patients scheduled</p>
            <button className="btn btn-primary" onClick={() => navigate('/doctor/schedule')}>View Schedule</button>
          </div>

          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-black font-semibold mb-3">Live Consultation</h2>
            <p className="text-gray-700 mb-3">Start a video session with your next patient.</p>
            <button className="btn btn-success">Start Now</button>
          </div>

          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-black font-semibold mb-3">Consultation History</h2>
            <p className="text-gray-700 mb-3">Access past patient records and notes.</p>
            <button className="btn btn-primary" onClick={() => navigate('/doctor/history')}>View History</button>
          </div>

          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-black font-semibold mb-3">Set Availability</h2>
            <p className="text-gray-700 mb-3">Update your weekly consultation slots.</p>
            <button className="btn btn-warning" onClick={() => navigate('/doctor/availability')}>Update Slots</button>
          </div>

          <div className="card bg-white p-5 rounded shadow hover:shadow-md transition">
            <h2 className="text-xl text-black font-semibold mb-3">My Earnings</h2>
            <p className="text-gray-700 mb-3">₹84,000 earned this month</p>
            <button className="btn btn-neutral" onClick={() => navigate('/doctor/earning')}>View Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
