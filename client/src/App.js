import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Error from "./components/error";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
