import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [User, SetUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleinp = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    SetUser({ ...User, [name]: value });
  };
  return (
    <div className="holder">
      <div className="parent">
        <h3>Sign Up</h3>
        <form action="">
          <div>
            <input
              type="text"
              placeholder="Name *"
              name="name"
              id="name"
              required
              value={User.name}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email *"
              name="email"
              id="email"
              required
              value={User.email}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="work"
              placeholder="work *"
              name="work"
              id="work"
              required
              value={User.work}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="phone"
              placeholder="phone *"
              name="phone"
              id="phone"
              required
              value={User.phone}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password *"
              name="password"
              id="password"
              required
              value={User.password}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password *"
              name="cpassword"
              id="cpassword"
              required
              value={User.cpassword}
              onChange={handleinp}
            />
            <span className="border"></span>
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="register"
            />
          </div>
          <p>
            Have Account?
            <NavLink to="/signin">Login Here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
