import React from "react";
import logo from "../assets/pes-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="PES University" className="logo" />
        <h2>Internship Portal</h2>
      </div>

      <div className="profile-section">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        />

        <span>Student</span>
      </div>

    </nav>
  );
};

export default Navbar;