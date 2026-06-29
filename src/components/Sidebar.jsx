import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaBell,
  FaRobot,
  FaChartBar,
  FaCheckCircle,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2>PES ERP</h2>

      <ul>

        <li>
          <Link to="/dashboard">
            <FaHome className="icon" />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUserGraduate className="icon" />
            Profile
          </Link>
        </li>

        <li>
          <Link to="/internship-form">
            <FaClipboardList className="icon" />
            Internship Form
          </Link>
        </li>

        <li>
          <Link to="/status">
            <FaCheckCircle className="icon" />
            Internship Status
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            <FaBell className="icon" />
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/chatbot">
            <FaRobot className="icon" />
            AI Chatbot
          </Link>
        </li>

        <li>
          <Link to="/reports">
            <FaChartBar className="icon" />
            Reports
          </Link>
        </li>

        <li>
          <Link to="/coordinator">
            <FaUserCircle className="icon" />
            Coordinator
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt className="icon" />
            Logout
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;