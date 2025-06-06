import React from 'react';

const Schedule = () => {
  // Example hardcoded appointment data
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Today's Appointments</h2>

      {todayAppointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments scheduled for today.</p>
      ) : (
        <ul className="space-y-4">
          {todayAppointments.map((appointment) => (
            <li
              key={appointment.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{appointment.patientName}</h3>
                <span className="text-sm text-gray-600">{appointment.time}</span>
              </div>
              <p className="text-gray-700 mb-1">Symptoms: {appointment.symptoms}</p>
              <p
                className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  appointment.status === 'Confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
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
