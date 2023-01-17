import React from "react";
import "./Hello.scss";

function Hello() {
  return (
    <React.Fragment>
      <section className="hello-container" id="Hello">
        <div className="box-container neu">
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

export default Hello;
