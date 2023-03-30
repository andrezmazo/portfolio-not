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
            <p></p>
            <ul>
              <li>JavaScript, React Js.</li>
              <li>
                Node Js, JAVA, MySql, Mongodb, Express Js, GitHub, Databases.
              </li>
              <li>HTML, semantic Web.</li>
              <li>CSS, SASS, Bootstrap.</li>
              <li>FrontEnd - Backend interaction. HTTP request, Postman.</li>
            </ul>
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
