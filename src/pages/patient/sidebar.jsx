import React from "react";

const Sidebar = ({ currentSection, setCurrentSection }) => {
  const sections = ["Appointments", "Health Records", "Consultation"];

  return (
    <div className="w-64 bg-purple-700 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Patient Menu</h2>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`cursor-pointer p-2 mb-2 rounded ${
              currentSection === section
                ? "bg-purple-500 font-semibold"
                : "hover:bg-purple-600"
            }`}
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
