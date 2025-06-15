import React, { useState, useEffect } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    const mockPatients = [
      { id: 1, name: 'Ravi Kumar', email: 'ravi@gmail.com', age: 29, gender: 'Male' },
      { id: 2, name: 'Sita Verma', email: 'sita@gmail.com', age: 34, gender: 'Female' },
      { id: 3, name: 'Aman Roy', email: 'aman@gmail.com', age: 22, gender: 'Male' },
    ];
    setPatients(mockPatients);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto  min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Registered Patients</h2>

      {patients.length === 0 ? (
        <p className="text-center text-gray-400">No patients found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-neutral-800 rounded-lg shadow-md">
            <thead className="bg-neutral-700 text-gray-300">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-neutral-700 hover:bg-neutral-700 transition">
                  <td className="py-2 px-4 text-gray-200">{patient.id}</td>
                  <td className="py-2 px-4 text-gray-200">{patient.name}</td>
                  <td className="py-2 px-4 text-gray-300">{patient.email}</td>
                  <td className="py-2 px-4 text-gray-200">{patient.age}</td>
                  <td className="py-2 px-4 text-gray-200">{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientList;
