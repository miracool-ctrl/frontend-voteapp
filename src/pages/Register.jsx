import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    password: "",
    password2: "",
  });

  // function to change our controlled input
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container register_container">
        <h2>Sign Up</h2>
        <form>
          <p className="form_error-message">Any error from the backend</p>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={changeInputHandler}
            autoComplete="on"
            autoFocus
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={changeInputHandler}
            autoComplete="on"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeInputHandler}
            autoComplete="on"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={changeInputHandler}
            autoComplete="on"
          />
          <p>
            Already have an account? <Link to="/">Sign in</Link>
          </p>
          <button type="submit" className="btn primary">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
