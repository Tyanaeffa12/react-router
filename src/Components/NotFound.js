import React from "react";
import Navigation from "./Navigation";
import sad from ".//image/sad.PNG";

export default function NotFound() {
    return (
      <section className="contact-container">
        <header><Navigation/></header>
        <div className="content-container">
         <img src={sad} alt="sad" />
  
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>The page you are looking for doesn't exist or an error occured.</p> 
        </div>
        
        
      </section>
  
    );
  }