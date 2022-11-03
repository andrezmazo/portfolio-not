import React from "react";
import "./Parallax.scss";

function Parallax() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="parallax_group hero-container">
          <div className="parallax_layer sky"></div>
          <div className="parallax_layer mountains"></div>
          <div className="parallax_layer buildings1"></div>
          <div className="parallax_layer buildings2"></div>
          <div className="parallax_layer hero-text">
            <div className="name-container">
              <h1>Hi, i'm</h1>
              <h1>ANDRÉS</h1>
              <h1>ZAPATA MAZO</h1>
            </div>
            <div className="social-container">
              <a href="https://www.linkedin.com/in/andrezmazo/" target="_blank">
                <i className="icon ion-logo-linkedin"></i>
              </a>
              <a href="https://github.com/andrezmazo" target="_blank">
                <i className="icon ion-logo-github"></i>
              </a>
              <a href="https://www.instagram.com/andrezmazo/" target="_blank">
                <i className="icon ion-logo-instagram"></i>
              </a>
              <a href="#contact" target="_blank">
                <i className="icon ion-app-icon-mail"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Parallax;
