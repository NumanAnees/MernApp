import React from "react";
import { NavLink } from "react-router-dom";

const error = () => {
  return (
    <div className="error-page">
      <div className="content">
        <h2>Error 404</h2>
        <NavLink to="/">back to home</NavLink>
      </div>
    </div>
  );
};

export default error;
