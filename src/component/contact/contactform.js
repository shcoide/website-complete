import React, { useState } from "react";
import '../../style/contact/contactform.css'
const FORM_ENDPOINT = "/"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (inputName) => {
    const label = document.querySelector(`[data-label-for="${inputName}"]`);
    const input = document.querySelector(`[name="${inputName}"]`);
  
    if (input.value === "") {
      label.style.display = "none"; 
    } else {
      label.style.display = "block";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section>
    <div className="section-header">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home" />
            </div>
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>
                4671 Sugar Camp Road,
                <br /> Owatonna, Minnesota, <br />
                55060
              </p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone" />
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
                <input
                  type="text"
                  required={true}
                  placeholder="Full Name"
                  name="fullName"
                  onInput={() => handleInputChange("fullName")}
                />
                <span data-label-for="fullName">Full Name</span>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  required={true}
                  name="email"
                  placeholder="Email"
                  onInput={() => handleInputChange("email")}
                />
                <span data-label-for="email">Email</span>
              </div>
              <div className="input-box">
                <textarea
                  required={true}
                  name="message"
                  defaultValue={""}
                  placeholder="Type your message...."
                  onInput={() => handleInputChange("message")}
                  />
                  <span data-label-for="message">Type your message....</span>
              </div>
              <div className="input-box">
                <input type="submit" defaultValue="Send" name="" />
              </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactForm;