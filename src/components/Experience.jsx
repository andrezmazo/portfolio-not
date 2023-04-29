import React from "react";
import "./Experience.scss";
import pic from "../img/pc-pic.png";

function Experience() {
  return (
    <React.Fragment>
      <section className="experience-container" id="Experience">
        <div className="box-container neu">
          <div className="text-container center">
            <h3 className="title-section">Experience</h3>
            <h2>Some technologies i've worked with </h2>
            <div className="list">
              <div>
                <h3>Front End technologies:</h3>
                <ul>
                  <li>Html.</li>
                  <li>Css.</li>
                  <li>JavaScript.</li>
                  <li>React js.</li>
                  <li>Angular.</li>
                  <li>Sass.</li>
                  <li>Bootstrap.</li>
                </ul>
              </div>
              <hr />
              <div>
                <h3> Back End technologies:</h3>
                <ul>
                  <li>Node.JS.</li>
                  <li>MySQL</li>
                  <li>Java.</li>
                  <li>PHP.</li>
                  <li>MongoDb.</li>
                  <li>MySQL.</li>
                  <li>Git.</li>
                  <li>Express js.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pic-container">
            <div className="over-pic"></div>
            <img src={pic} className="main-pic" alt="Andrés Zapata Mazo" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Experience;
