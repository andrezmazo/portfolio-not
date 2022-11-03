import React from "react";
import "./About.scss";

function About() {
  return (
    <React.Fragment>
      <section className="about-container" id="About">
        <div className="box-container neu">
          <div className="pic-container">
            <img
              src="./img/pic.jpg"
              className="main-pic"
              alt="Andrés Zapata Mazo"
            />
          </div>
          <div className="text-container center">
            <h3 className="title-section">About me</h3>
            <h2>Hello!</h2>
            <p>What would life be if we had no courage to attempt anything?</p>
            <p>- Vincent Van Gogh</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
