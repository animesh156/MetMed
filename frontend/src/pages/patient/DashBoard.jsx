import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard, MdCalendarToday } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const items = [
    { name: "Dashboard", icon: MdDashboard, route: "/patient/dashboard" },
    { name: "Appointments", icon: MdCalendarToday, route: "/patient/appointments" },
    { name: "Doctors", icon: FaUserDoctor, route: "/patient/doctors" },
    { name: "Settings", icon: IoSettingsOutline, route: "/patient/settings" },
    { name: "Logout", icon: FiLogOut, route: "/" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-neutral-900 text-white">
      {/* Vertical Sidebar for desktop */}
      <div className="hidden md:block w-64 bg-neutral-950 h-full">
        <Sidebar items={items} />
      </div>

      {/* Top Navbar for mobile */}
      <div className="md:hidden w-full bg-neutral-950 border-b border-neutral-700 px-4 py-3 flex justify-between items-center overflow-x-auto gap-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.route)}
            className="flex flex-col items-center text-sm hover:text-blue-400 transition"
          >
            <item.icon className="text-xl" />
            {item.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">
          Welcome <span className="text-blue-400">{name?.toUpperCase() || "Guest"}</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Manage your appointments, view history, and consult doctors with ease.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Upcoming Appointments"
            buttonText="View Now"
            bg="bg-neutral-800"
            hover="hover:bg-neutral-700"
            onClick={() => navigate("/patient/appointments")}
          />
          <DashboardCard
            title="Book New Appointments"
            buttonText="Book Now"
            bg="bg-neutral-800"
            hover="hover:bg-neutral-700"
            onClick={() => navigate("/patient/doctors")}
          />
          <DashboardCard
            title="Last Consulted Doctors"
            buttonText="View History"
            bg="bg-neutral-800"
            hover="hover:bg-neutral-700"
            onClick={() => navigate("/patient/history")}
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component for Dark Mode
const DashboardCard = ({ title, buttonText, bg, hover, onClick }) => (
  <div className={`rounded-xl p-6 shadow transition duration-200 ${bg} ${hover}`}>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
    >
      {buttonText}
    </button>
  </div>
);

export default DashBoard;
