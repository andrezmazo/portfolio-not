import React from "react";
import "./About.scss";
import pic from "../img/pic.jpg";

function About(props) {
  return (
    <React.Fragment>
      <section  ref={props.myRef} className="about-container" id="About">
        <div className="box-container neu">
          <div className="pic-container">
            <img src={pic} className="main-pic" alt="Andrés Zapata Mazo" />
          </div>
          <div className="text-container center">
            <h3 className="title-section">About me</h3>
            <h2>Hello!</h2>
            <p>
              My name is Andrés, I'm a Sound Engineer and a Junior Full Stack Developer. I enjoy creating things as a Web Developer.
              I have qualities of adaptability, determination, leadership and
              teamwork management, which have been my greatest tools in each of
              the projects where I have worked. I'm looking for opportunitties to acquire new
              knowledge to develop myself in new challenges
            </p>
            <p>What would life be if we had no courage to attempt anything?</p>
            <p>- Vincent Van Gogh</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
