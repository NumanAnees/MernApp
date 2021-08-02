import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/SignIn">
        <SignIn />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
    </div>
  );
};

export default App;
