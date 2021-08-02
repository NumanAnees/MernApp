import React from "react";
import { NavLink } from "react-router-dom";

const signin = () => {
  return (
    <div className="holder">
      <div className="parent">
        <h3>Sign Up</h3>
        <form action="">
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
              type="password"
              placeholder="Password *"
              name="password"
              id="password"
              required
            />
            <span className="border"></span>
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="signin"
              id="signin"
              className="form-submit"
              value="signin"
            />
          </div>
          <p>
            Does not have any account?
            <NavLink to="/signup">Register Here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signin;
