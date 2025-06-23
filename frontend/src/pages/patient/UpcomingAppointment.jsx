import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";

function UpcomingAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await API.get("/patient/appointments", {
          withCredentials: true,
        });
        console.log("Fetched appointments:", res.data);
        setAppointments(res.data || []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 min-h-screen max-w-5xl mx-auto">
      <h1 className="text-3xl text-blue-400 font-bold mb-6 text-center">
        My Upcoming Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-400 text-center">
          No upcoming appointments found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appt) => (
            <div
              key={appt._id}
              className="bg-neutral-800 p-5 rounded shadow border border-neutral-700"
            >
              <h2 className="text-xl font-bold text-white mb-2">
                Dr. {appt.doctorId?.doctorId?.name?.toUpperCase() || "Unknown"}
              </h2>

              <p className="text-gray-300">
                📅 <strong>Date:</strong>{" "}
                {new Date(appt.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="text-gray-300">
                ⏰ <strong>Slot:</strong> {appt.slot}
              </p>
              <p className="text-gray-300">
                📝 <strong>Reason:</strong> {appt.reason || "N/A"}
              </p>
              <p className="text-gray-300">
                🧠 <strong>Specialization:</strong>{" "}
                {appt.doctorId?.specialization || "N/A"}
              </p>
              <p className="text-gray-300">
                🧑‍⚕️ <strong>Experience:</strong> {appt.doctorId?.experience || 0}{" "}
                years
              </p>

              <p
                className={`mt-2 font-medium ${
                  appt.status === "confirmed"
                    ? "text-green-500"
                    : appt.status === "pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                🔔 <strong>Status:</strong> {appt.status}
              </p>

              <p
                className={`mt-1 font-medium ${
                  appt.paymentStatus === "paid"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                💳 <strong>Payment:</strong> {appt.paymentStatus}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingAppointment;
