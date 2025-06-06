import React from 'react';

const mockHistory = [
  {
    id: 1,
    doctor: 'Dr. Anjali Sharma',
    date: '2025-05-20',
    time: '10:00 AM',
    diagnosis: 'General Checkup',
    prescription: 'Vitamin D, Multivitamins',
  },
  {
    id: 2,
    doctor: 'Dr. Rajeev Menon',
    date: '2025-04-15',
    time: '3:30 PM',
    diagnosis: 'Allergy',
    prescription: 'Cetirizine',
  },
];

function History() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Consultation History</h2>

      {mockHistory.length === 0 ? (
        <p className="text-center text-gray-500">No history available.</p>
      ) : (
        <div className="space-y-4">
          {mockHistory.map((entry) => (
            <div
              key={entry.id}
              className="border rounded-md shadow-sm p-5 bg-white hover:shadow-md transition"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">{entry.doctor}</h3>
                <span className="text-gray-600">{entry.date} at {entry.time}</span>
              </div>
              <p className="text-gray-700"><strong>Diagnosis:</strong> {entry.diagnosis}</p>
              <p className="text-gray-700"><strong>Prescription:</strong> {entry.prescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
