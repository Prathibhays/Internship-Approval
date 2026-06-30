import React, { useState } from "react";
import "./Login.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUserGraduate,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const [srn, setSrn] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      srn,
      password,
    });
  };

  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="overlay"></div>

        <div className="login-card">

          <div className="avatar">

            <FaUserGraduate />

          </div>

          <h1>Student SIGN IN</h1>

          <div className="orange-line"></div>

          <form onSubmit={handleLogin}>

            <div className="input-box">

              <FaUser className="input-icon" />

              <input
                type="text"
                placeholder="Enter SRN"
                value={srn}
                onChange={(e) => setSrn(e.target.value)}
                required
              />

            </div>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            <div className="forgot">

              <a href="/">Forgot Password?</a>

            </div>

            <button type="submit">

              Log in

            </button>

            <div className="divider">

              <span></span>

              <p>or</p>

              <span></span>

            </div>

            <p className="signup">

              Don't have an account?

              <a href="/"> Sign up</a>

            </p>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Login;