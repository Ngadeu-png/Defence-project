import React, { useState } from "react";
import ConsultationJoin from "./consultation";
const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    specialty: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked with: " + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 ">
      <h2 className="text-lg font-bold mb-4">Book Appointment</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-90 mb-3 px-4 py-2 border rounded-lg"
      />
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="w-90 mb-3 px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Specialty"
        value={formData.specialty}
        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
        className="w-90 mb-3 px-4 py-2 border rounded-lg"
      />
      <textarea
        placeholder="Reason for appointment"
        value={formData.reason}
        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        className="w-full mb-3 px-4 py-2 border rounded-lg"
      />
      <button
        type="submit"
        className="w-90 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Book
      </button>
    </form>
    
  );
};
<ConsultationJoin/>
export default BookAppointmentForm;
