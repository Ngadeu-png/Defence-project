import { MdOutlineDashboard } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { GiMiracleMedecine } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const AdminSidebard = () => {
  return (
    <aside className="w-52 h-[100vh] fixed bg-purple-400 ">
      <div className="px-4">
        <div className="text-3xl text-white font-bold mb-8 pt-4">ADMIN</div>
        <ul className="text-white space-y-4">
          <NavLink to="/admin" end>
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
          <NavLink to="/admin/appointment">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span>
                  <CiCalendarDate />
                </span>
                <span>Manage Appointment</span>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/consultation">
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

          <NavLink to="/admin/DoctorForm">
            {({ isActive }) => (
              <li
                className={`flex items-center gap-4 hover:bg-white hover:text-black cursor-pointer p-3 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <span>
                  <GiMiracleMedecine />
                </span>
                <span>Manage Doctors</span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebard;
