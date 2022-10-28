import React from "react";
import loginimg from ".//image/login.JPG";
import pass from ".//image/password.JPG";
import email from ".//image/email.PNG";
import Navigation from "./Navigation";

export default function Login() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={loginimg} alt="loginimg" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="User Name" className="name" />
              </div>
              <div>
                <img src={pass} alt="pass" className="email" />
                <input type="text" placeholder="Password" className="name" />
              </div>
              <div className="button-container">
                <button className="login-button">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
