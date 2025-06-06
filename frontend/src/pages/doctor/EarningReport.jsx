import React from 'react';

const EarningReport = () => {
  const earnings = {
    total: 84000,
    month: 'June 2025',
    consultations: [
      { id: 1, patient: 'Ankit Sinha', date: '2025-06-01', amount: 800 },
      { id: 2, patient: 'Sneha Roy', date: '2025-06-03', amount: 1000 },
      { id: 3, patient: 'Ravi Kumar', date: '2025-06-05', amount: 1200 },
      { id: 4, patient: 'Meena Singh', date: '2025-06-06', amount: 900 },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-3xl font-bold mb-4 text-center">Earning Report</h2>

      {/* Total Earnings */}
      <div className="bg-blue-100 text-blue-800 p-4 rounded mb-6 text-center">
        <h3 className="text-xl font-semibold">Total Earnings - {earnings.month}</h3>
        <p className="text-3xl font-bold mt-2">₹{earnings.total.toLocaleString()}</p>
      </div>

      {/* Table of Consultations */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Patient</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {earnings.consultations.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.patient}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">₹{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningReport;
