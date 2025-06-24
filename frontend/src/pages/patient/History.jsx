import React, { useEffect, useState } from "react";
import API from "../../utils/api"; // axios wrapper
import Loader from "../../components/Loader";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get("/patient/history", {
          withCredentials: true,
        });
        setHistory(res.data);
      } catch (err) {
        console.error("Error loading history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Consultation History</h2>

      {history.length === 0 ? (
        <p className="text-center text-white">No history available.</p>
      ) : (
        <div className="space-y-4">
          {history.map((entry, index) => (
            <div
              key={index}
              className="border rounded-md shadow-sm p-5 bg-neutral-800 border-neutral-700 hover:shadow-md transition"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-xl text-blue-600 font-semibold">{entry.doctor}</h3>
                <span className="text-slate-100">{entry.date} at {entry.time}</span>
              </div>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
