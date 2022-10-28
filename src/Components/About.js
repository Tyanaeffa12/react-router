import React from "react";
import Navigation from "./Navigation";

export default function About() {
  return (
    <section>
      <header>
        <Navigation />
      </header>
      <div className="about-container">
        <h1 className="abouut-h1">Assignment 2</h1>

        <p className="about-paragraph">
          Setup react-router, implement Nested routes, 404 page,
          and Error boundary. Set up client-side pagination using randomuser.me
          API in one of your routes called Users - you should show the prev,
          next, and navigation to individual pages 1, 2, 3, 4, 5 etc. Implement
          accessibility and disabled state and API loading states.
        </p>
      </div>
    </section>
  );
}
