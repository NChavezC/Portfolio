import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo on the upper-left */}
          <div>
            <Logo />
          </div>

          {/* Space between logo and links */}
          <div className="ml-6 flex space-x-4">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-black hover:text-blue-500"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/curriculum"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-black hover:text-blue-500"
                }`
              }
            >
              Curriculum
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-black hover:text-blue-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
