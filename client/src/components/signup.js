import React from "react";
import { NavLink } from "react-router-dom";

const signup = () => {
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

export default signup;
