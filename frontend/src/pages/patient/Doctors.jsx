import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    specialization: 'Cardiologist',
    diseases: ['Heart disease', 'Hypertension'],
    fee: 800,
  },
  {
    id: 2,
    name: 'Dr. Rakesh Nair',
    specialization: 'Dermatologist',
    diseases: ['Acne', 'Eczema', 'Psoriasis'],
    fee: 600,
  },
  {
    id: 3,
    name: 'Dr. Priya Khanna',
    specialization: 'Pediatrician',
    diseases: ['Cold', 'Fever', 'Flu'],
    fee: 500,
  },
];

function Doctors() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsList.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-1">{doc.name}</h3>
            <p className="text-gray-700 mb-1">
              <strong>Specialization:</strong> {doc.specialization}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Treats:</strong> {doc.diseases.join(', ')}
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Fee:</strong> ₹{doc.fee}
            </p>
            <button className="btn btn-primary w-full"   onClick={() => navigate('/patient/book', { state: {
    doctor: {
      name: doc.name,
      specialization: doc.specialization,
      fee: doc.fee,
    },
  },})}>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
