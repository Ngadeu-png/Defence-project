import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const API_URL = "http://localhost:5000/api/doctors"; 

const DoctorForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    image: "",
    password: "",
  });
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingDoctor) {
        // Update doctor
        const res = await fetch(`${API_URL}/${editingDoctor._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const updatedDoctor = await res.json();

        setDoctors((prev) =>
          prev.map((doc) => (doc._id === updatedDoctor._id ? updatedDoctor : doc))
        );
        setSuccess("Doctor updated successfully!");
      } else {
        // Add new doctor
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const newDoctor = await res.json();

        setDoctors((prev) => [...prev, newDoctor]);
        setSuccess("Doctor added successfully!");
      }

      setFormData({ name: "", specialty: "", email: "", phone: "", password: "" });
      setEditingDoctor(null);
    } catch (err) {
      console.error("Error saving doctor:", err);
      setSuccess("Error saving doctor!");
    }
  };
  
  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setFormData(doctor);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setDoctors((prev) => prev.filter((doc) => doc._id !== id));
      setSuccess("Doctor deleted successfully!");
      setEditingDoctor(null);
      setFormData({ name: "", specialty: "", email: "", phone: "", image: "" });
    } catch (err) {
      console.error("Error deleting doctor:", err);
      setSuccess("Error deleting doctor!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-200 p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/20 p-6 rounded-xl shadow-xl backdrop-blur-md border border-white/30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
            {editingDoctor ? "Edit Doctor" : "Add Doctor"}
          </h2>

          {success && <p className="text-green-600 mb-2">{success}</p>}

          <div className="grid grid-cols-1 gap-3">
            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            <InputField
              label="Specialty"
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="Enter specialty"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            <InputField
              label="Phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
            />
             <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <div className="flex gap-3 mt-6 justify-center">
            <Button
              text={editingDoctor ? "Update Doctor" : "Add Doctor"}
              type="submit"
            />
            {editingDoctor && (
              <Button
                text="Delete"
                type="button"
                onClick={() => handleDelete(editingDoctor._id)}
                className="bg-red-500 hover:bg-red-600"
              />
            )}
          </div>
        </motion.form>

        {/* Doctor List */}
        <div className="bg-white/20 p-6 rounded-xl shadow-xl backdrop-blur-md border border-white/30">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
            Doctor List
          </h2>
          <div className="space-y-3">
            {doctors.map((doc) => (
              <div
                key={doc._id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-700">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.specialty}</p>
                </div>
                <Button
                  text="Edit"
                  type="button"
                  onClick={() => handleEdit(doc)}
                  className="bg-yellow-500 hover:bg-yellow-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
