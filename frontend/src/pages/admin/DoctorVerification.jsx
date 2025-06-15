import React, { useState, useEffect } from 'react';

function DoctorVerification() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Ideally, fetch from backend API
    const pendingDoctors = [
      {
        id: 1,
        name: 'Dr. Anjali Sharma',
        specialization: 'Dermatologist',
        experience: '5 years',
        documents: ['Medical License.pdf', 'ID Proof.pdf'],
        status: 'Pending',
      },
      {
        id: 2,
        name: 'Dr. Rajeev Menon',
        specialization: 'Cardiologist',
        experience: '10 years',
        documents: ['Medical Degree.pdf', 'Aadhaar.pdf'],
        status: 'Pending',
      },
    ];

    setDoctors(pendingDoctors);
  }, []);

  const handleVerify = (id) => {
    // Ideally send PUT/PATCH request to backend
    setDoctors((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: 'Verified' } : doc
      )
    );
  };

  const handleReject = (id) => {
    // Ideally send DELETE or PATCH request to backend
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto  min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Doctor Verification</h2>

      {doctors.length === 0 ? (
        <p className="text-center text-gray-400">No pending doctor verifications.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-neutral-800 border-l-4 border-yellow-400 p-5 rounded shadow"
            >
              <h3 className="text-xl font-semibold text-white">{doctor.name}</h3>
              <p className="text-gray-300">Specialization: {doctor.specialization}</p>
              <p className="text-gray-300">Experience: {doctor.experience}</p>
              <p className="text-gray-300 mb-2">
                Documents:{" "}
                <span className="text-gray-400">{doctor.documents.join(', ')}</span>
              </p>

              <div className="flex space-x-3 mt-3">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => handleVerify(doctor.id)}
                  disabled={doctor.status === 'Verified'}
                >
                  {doctor.status === 'Verified' ? 'Verified' : 'Verify'}
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => handleReject(doctor.id)}
                  disabled={doctor.status === 'Verified'}
                >
                  Reject
                </button>
              </div>

              {doctor.status === 'Verified' && (
                <p className="text-green-400 font-medium mt-2">Doctor has been verified ✅</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DoctorVerification;
