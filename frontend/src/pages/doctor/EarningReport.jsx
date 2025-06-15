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
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-neutral-800 border border-neutral-700 rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Earning Report</h2>

      {/* Total Earnings */}
      <div className="bg-blue-900/20 text-blue-400 p-4 rounded mb-6 text-center">
        <h3 className="text-xl font-semibold">Total Earnings - {earnings.month}</h3>
        <p className="text-3xl font-bold mt-2">₹{earnings.total.toLocaleString()}</p>
      </div>

      {/* Table of Consultations */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-neutral-700 text-gray-300">
            <tr>
              <th className="px-4 py-2 border border-neutral-600">#</th>
              <th className="px-4 py-2 border border-neutral-600">Patient</th>
              <th className="px-4 py-2 border border-neutral-600">Date</th>
              <th className="px-4 py-2 border border-neutral-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {earnings.consultations.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-neutral-700 text-white transition"
              >
                <td className="px-4 py-2 border border-neutral-700">{index + 1}</td>
                <td className="px-4 py-2 border border-neutral-700">{item.patient}</td>
                <td className="px-4 py-2 border border-neutral-700">{item.date}</td>
                <td className="px-4 py-2 border border-neutral-700">₹{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningReport;
