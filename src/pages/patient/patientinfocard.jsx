import React from "react";

const PatientInfoCard = ({ patient }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p className="text-gray-600">ID: {patient.id}</p>
      <p className="text-gray-600">Age: {patient.age}</p>
      <p className="text-gray-600">Blood Type: {patient.bloodType}</p>
    </div>
  );
};

export default PatientInfoCard;
