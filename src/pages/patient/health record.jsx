import React from "react";

const HealthRecords = ({ records = [] }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-bold mb-4">Health Records</h2>
      <ul className="space-y-2">
        {/* The code now safely maps over the 'records' array,
            which defaults to an empty array if no data is passed. */}
        {records.map((record) => (
          <li key={record.id} className="border-b pb-2">
            <p className="font-semibold">{record.type}</p>
            <p className="text-gray-600 text-sm">
              {record.date} - {record.doctor}
            </p>
            <span className="text-xs text-green-600">{record.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthRecords;