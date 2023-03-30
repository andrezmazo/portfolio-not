import React from "react";
import "./Work.scss";
import pic1 from "../img/Petshop.jpg";

function Work() {
  return (
    <React.Fragment>
      <section className="work-container" id="Work">
        <div className="box-container neu">
          <div className="text-container center">
            <h3 className="title-section">Work</h3>
            <h2>Some things I've built </h2>
            <div className="petshop-container">
              <div className="pic-container">
                <div className="over-pic"></div>
                <img src={pic1} className="pic1" alt="Petshop" />
              </div>
              <div className="text-petshop">
                <h4>Petshop E-commerce</h4>
                <p> </p>
              </div>
            </div>
            <p>
              My name is Andrés, I'm a Sound Engineer and a Junior Full Stack
              Developer. I enjoy creating things as a Web Developer. I have
              qualities of adaptability, determination, leadership and teamwork
              management, which have been my greatest tools in each of the
              projects where I have worked. I'm looking for opportunitties to
              acquire new knowledge to develop myself in new challenges
            </p>
            <p>What would life be if we had no courage to attempt anything?</p>
            <p>- Vincent Van Gogh</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Work;
