import React, { Component } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "active" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? "active" : null)}
          >
            Contact
          </NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
}
export default App;
