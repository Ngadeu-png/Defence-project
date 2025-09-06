import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const DoctorForm = () => {
  const [doctors, setDoctors] = useState([
    
  ]);

  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    image: "",
  });

  const [editingDoctor, setEditingDoctor] = useState(null);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingDoctor) {
  
      setDoctors((prev) =>
        prev.map((doc) =>
          doc.id === editingDoctor.id ? { ...editingDoctor, ...formData } : doc
        )
      );
      setSuccess("Doctor updated successfully!");
    } else {

      const newDoctor = {
        ...formData,
        id: doctors.length ? doctors[doctors.length - 1].id + 1 : 1,
      };
      setDoctors((prev) => [...prev, newDoctor]);
      setSuccess("Doctor added successfully!");
    }

    setFormData({ name: "", specialty: "", email: "", phone: "", image: "" });
    setEditingDoctor(null);
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setFormData(doctor);
  };

  const handleDelete = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
    setSuccess("Doctor deleted successfully!");
    setEditingDoctor(null);
    setFormData({ name: "", specialty: "", email: "", phone: "", image: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-200 p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
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

          </div>

          <div className="flex gap-3 mt-6 justify-center">
            <Button text={editingDoctor ? "Update Doctor" : "Add Doctor"} type="submit" />
            {editingDoctor && (
              <Button
                text="Delete"
                type="button"
                onClick={() => handleDelete(editingDoctor.id)}
                className="bg-red-500 hover:bg-red-600"
              />
            )}
          </div>
        </motion.form>

        <div className="bg-white/20 p-6 rounded-xl shadow-xl backdrop-blur-md border border-white/30">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Doctor List</h2>
          <div className="space-y-3">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-gray-700">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.specialty}</p>
                  </div>
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
