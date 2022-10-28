import React from "react";
import { NavLink } from "react-router-dom";


export default function Navigation() {
    return (
      <section className="nav-container">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }
          to="/"
          className="navlink"
        >
          Home Page
        </NavLink>
  
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }
          to="/about"
          className="navlink"
        >
          About Page
        </NavLink>
  
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }
          to="/Login"
          className="navlink"
        >
          Login Page
        </NavLink>
  
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          to="/Contact"
          className="navlink"
        >
          Contact Me
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          to="/Users"
          className="navlink"
        >
          Users
        </NavLink>
        
      </section>
    );
  }


  