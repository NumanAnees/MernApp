import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || res.status === 422 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("login successfull");
      history.push("/");
    }
  };
  return (
    <div className="holder">
      <div className="parent">
        <h3>Sign Up</h3>
        <form method="POST">
          <div>
            <input
              type="email"
              placeholder="Email *"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                Setemail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
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
              onClick={loginUser}
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

export default Signin;
