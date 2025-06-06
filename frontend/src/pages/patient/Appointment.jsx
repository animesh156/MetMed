import React from 'react';

function Appointment() {
  // Sample static data (you'll replace this with fetched data later)
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Anjali Mehta",
      date: "June 10, 2025",
      time: "11:30 AM",
      type: "Video Consultation",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Ravi Sharma",
      date: "June 12, 2025",
      time: "2:00 PM",
      type: "Clinic Visit",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
        Upcoming Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">No appointments scheduled.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appt) => (
            <li key={appt.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-1 text-blue-700">{appt.doctor}</h2>
              <p className="text-gray-700">📅 {appt.date} at 🕒 {appt.time}</p>
              <p className="text-gray-600 mt-1">Type: {appt.type}</p>
              <p className={`mt-2 font-medium ${appt.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {appt.status}
              </p>
              <button className="btn btn-sm btn-primary mt-4">View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Appointment;
