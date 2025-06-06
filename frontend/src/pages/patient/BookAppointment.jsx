import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function BookAppointment() {
  const location = useLocation();
  const doctor = location.state?.doctor;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
  };

  if (!doctor) {
    return <div className="text-center text-red-600 text-xl mt-10">No doctor selected.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment with</h2>

      {/* Doctor Card */}
      <div className="bg-blue-50 p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        <p className="text-gray-700">{doctor.specialization}</p>
        <p className="text-gray-500">Fee: ₹{doctor.fee}</p>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block font-medium mb-2">Choose Date</label>
          <input
            type="date"
            className="w-full border px-4 py-2 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>

        {/* Time Slot Selection */}
        <div>
          <label className="block font-medium mb-2">Available Time Slots</label>
          <div className="grid grid-cols-2 gap-3">
            {times.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`border px-4 py-2 rounded text-center ${
                  selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
