import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <React.Fragment>
      <section className="contact-container" id="Contact">
        <div className="box-container neu">
          <div className="text-container center">
            <h3 className="title-section">Contact</h3>
            <h2>Get in touch</h2>
            <p>
              My inbox is always open. Whether you have a question or just want
              to say hi, I’ll try my best to get back to you!
            </p>
            <button>Say Hi</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
