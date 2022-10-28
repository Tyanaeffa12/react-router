import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <Navigation />
      </header>
      
      <div className="home1-container">
        <Link to="/about" className="home-link">
          About
        </Link>

        <Link to="/login" className="home-link">
          Login
        </Link>

        <Link to="/contact" className="home-link">
          Contact
        </Link>

        <Link to="/users" className="home-link">
          Users
        </Link>
      </div>
    </div>
  );
}
