import React from 'react';

const Schedule = () => {
  const todayAppointments = [
    {
      id: 1,
      patientName: 'Ravi Kumar',
      time: '10:00 AM',
      symptoms: 'Chest pain',
      status: 'Pending',
    },
    {
      id: 2,
      patientName: 'Priya Mehta',
      time: '11:30 AM',
      symptoms: 'Fever & cough',
      status: 'Confirmed',
    },
    {
      id: 3,
      patientName: 'Amit Singh',
      time: '1:00 PM',
      symptoms: 'Headache',
      status: 'Pending',
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-neutral-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
        Today's Appointments
      </h2>

      {todayAppointments.length === 0 ? (
        <p className="text-center text-gray-400">No appointments scheduled for today.</p>
      ) : (
        <ul className="space-y-4">
          {todayAppointments.map((appointment) => (
            <li
              key={appointment.id}
              className="border border-neutral-700 rounded-lg p-4 shadow-md hover:shadow-lg bg-neutral-800 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {appointment.patientName}
                </h3>
                <span className="text-sm text-gray-400">{appointment.time}</span>
              </div>
              <p className="text-gray-300 mb-1">Symptoms: {appointment.symptoms}</p>
              <p
                className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  appointment.status === 'Confirmed'
                    ? 'bg-green-700 text-white'
                    : 'bg-yellow-600 text-black'
                }`}
              >
                {appointment.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schedule;
