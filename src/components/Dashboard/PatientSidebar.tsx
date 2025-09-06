import { MdOutlineDashboard } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { GiMiracleMedecine } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const PatientSidebard = () => {
  return (
    <aside className="w-52 h-[100vh] fixed bg-purple-500 ">
      <div className="px-4">
        <div className="text-3xl text-white font-bold mb-8 pt-4">Logo</div>
        <ul className="text-white space-y-4">
          <NavLink to="/patient" end>
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span>
                  <MdOutlineDashboard />
                </span>
                <span>Dashboard</span>
              </li>
            )}
          </NavLink>
          <NavLink to="/patient/appointment">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span>
                  <CiCalendarDate />
                </span>
                <span>Appointments</span>
              </li>
            )}
          </NavLink>
          <NavLink to="/patient/consultation">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span>
                  <GiMiracleMedecine />
                </span>
                <span>Consultations</span>
              </li>
            )}
          </NavLink>

          <NavLink to="/admin/dashboard">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span></span>
                <span>MY RECORD</span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default PatientSidebard;
