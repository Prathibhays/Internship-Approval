import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white">

      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Menu
      </div>

      <ul className="p-5 space-y-4">

        <li>
          <Link to="/dashboard" className="hover:text-blue-300">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile" className="hover:text-blue-300">
            Profile
          </Link>
        </li>

        <li>
          <Link to="/internship-form" className="hover:text-blue-300">
            Internship Form
          </Link>
        </li>

        <li>
          <Link to="/status" className="hover:text-blue-300">
            Status
          </Link>
        </li>

        <li>
          <Link to="/notifications" className="hover:text-blue-300">
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/chatbot" className="hover:text-blue-300">
            AI Chatbot
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;