import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. NSOH HONORE",
    specialty: "General Medicine",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "28 Oct 2019",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Dr. Amy Turner",
    specialty: "Dermatology",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "28 Oct 2019",
    time: "10:10 AM",
  },
  {
    id: 1,
    name: "Dr. Matthew Martin",
    specialty: "General Medicine",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "28 Oct 2019",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Dr. Amy Turner",
    specialty: "Dermatology",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "28 Oct 2019",
    time: "10:10 AM",
  },
  {
    id: 1,
    name: "Dr. Matthew Martin",
    specialty: "General Medicine",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "28 Oct 2019",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Dr. Amy Turner",
    specialty: "Dermatology",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "28 Oct 2019",
    time: "10:10 AM",
  },
];

// Green button
const GreenButton = ({ children }) => {
  return (
    <button className="px-3 py-1 text-xs font-medium rounded-full bg-green-500 text-white hover:bg-green-600 transition">
      {children}
    </button>
  );
};

// Red button
const RedButton = ({ children }) => {
  return (
    <button className="px-3 py-1 text-xs font-medium rounded-full bg-red-500 text-white hover:bg-red-600 transition">
      {children}
    </button>
  );
};

const DoctorList = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition bg-gray-50"
          >
            {/* Doctor Info */}
            <div className="flex items-center gap-3">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-800 text-sm">{doc.name}</h3>
                <p className="text-xs text-gray-500">{doc.specialty}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-end gap-1 text-right">
              <p className="text-xs text-gray-500">{doc.date}</p>
              <p className="text-sm font-medium text-gray-800">{doc.time}</p>
              <div className="flex gap-2 mt-1">
                <GreenButton>Confirm</GreenButton>
                <GreenButton>Send</GreenButton>
                <RedButton>Pending</RedButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
