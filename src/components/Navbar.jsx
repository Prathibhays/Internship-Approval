import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Internship Portal
        </h1>

        <div className="space-x-6">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>

          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>

          <Link to="/notifications" className="hover:text-gray-200">
            Notifications
          </Link>

          <Link to="/" className="hover:text-gray-200">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;