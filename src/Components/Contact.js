import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError("Please fill out all fields.");
      setTimeout(() => {
        setFormError("");
      }, 5000); // Clear error message after 5 seconds
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    try {
      await axios.post("https://formspree.io/f/xqkrvkyn", formData);
      setSubmitted(true);
      setName(""); // Clearing form data after submission
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSubmitted(false);
      }, 5000); // Clear success message after 5 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("An error occurred while submitting the form.");
      setTimeout(() => {
        setFormError("");
      }, 5000); // Clear error message after 5 seconds
    }
  };


  return (
    <section id="contact" className="section-contact bg-dark">
      <div className="container-fluid px-lg-5">
        <div className="d-flex text-center mb-5">
          <h2 className="About">Contact</h2>
          <p className="know">Get in Touch</p>
        </div>
        <div className="row gy-5 contact-sub">
          <div className="col-lg-4 col-md-12 order-1 order-md-0 text-center text-md-start">
            <h2 className="mb-3 text-5 text-uppercase text-white">Address</h2>
            <p className="text-3 mb-4 text-light">
              Federal B Area
              <br />
              Block 2 Karachi
              <br />
              Pakistan
            </p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone"></i>
              </span>
              +92 3162883190
            </p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fab fa-whatsapp"></i>
              </span>
              +92 3162883190
            </p>
            <p className="text-3 mb-4 text-light">
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope"></i>
              </span>
              moizfaisal654@gmail.com
            </p>
            <h2 className="mb-3 text-5 text-uppercase text-white">Follow Me</h2>
            <ul className="social-icons justify-content-start justify-content-md-start social-icons-muted">
            <li className="social-icons-instagaram">
            <a
              href="https://www.instagram.com/moizfaisal654?igsh=eWxtY3BjMHV3aW1o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-icons-facebook">
            <a
              href="https://www.facebook.com/moizfaisal654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-icons-linkedin">
            <a
              href="https://www.linkedin.com/in/moiz-faisal-865713238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-icons-github">
            <a
              href="https://github.com/moizfaisal654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
            </ul>
          </div>
          <div className="col-lg-8 col-md-12 order-0 order-md-1">
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-start text-white">
              Send us a note
            </h2>

           
          
            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            {/* Display Success/Error Message */}
            {formError && <p className="error-message">{formError}</p>}
            {submitted && (
              <p className="success-message">Thank you for your submission!</p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
