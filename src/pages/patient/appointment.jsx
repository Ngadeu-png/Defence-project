import React, { useState } from "react";
import Select from "react-select";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const specialties = [
  { value: "generalist", label: "Generalist" },
  { value: "neurologist", label: "Neurologist" },
  { value: "ophthalmologist", label: "Ophthalmologist" },
  { value: "cardiology", label: "Cardiology" },
];

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    specialty: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked with: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-200 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/20 p-8 rounded-xl shadow-2xl backdrop-blur-md border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
          Book Appointment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />

          <InputField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <Select
              options={specialties}
              placeholder="Select Specialty"
              onChange={(option) =>
                setFormData((prev) => ({ ...prev, specialty: option.value }))
              }
              className="rounded-xl"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-purple-900 mb-1">
              Reason for appointment
            </label>
            <textarea
              name="reason"
              id=""
              className="w-full px-4 py-2 rounded-md bg-white/70 text-gray-900 placeholder-gray-500 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Reason for appointment"
            ></textarea>
          </div>
        </div>

        <div className="mt-8">
          <Button text="Book Appointment" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
