import React, { useState } from "react";
import profileImage from "../profile.jpeg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close navbar on mobile after clicking a link
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sidebar bg-dark text-white ${isOpen ? "open" : ""}`}>
      <div className="navbar-toggle">
        <div className="toggle-content">
          <i className="fas fa-bars" onClick={toggleNavbar}></i>
          <div className="profile-info">
            <img
              src={profileImage}
              alt="Profile"
              style={{
                opacity: "0.7",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginLeft: "10px",
              }}
            />
            <a href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            >
              <span style={{ marginLeft: "10px", lineHeight: "40px" }}>Moiz Faisal</span>
              </a>
          </div>
        </div>
      </div>
      <div className="sidebar-content position-sticky">
        <ul className="nav flex-column">
        <li className="nav-item">
            <a
              className="nav-link active text-white"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <img src={profileImage} alt="" style={{ opacity: "0.7" }} />
              <h2 className="head-m">Moiz Faisal</h2>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              What I Do
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("resume");
              }}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="social-icons justify-content-center justify-content-md-center social-icons-muted">
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
              href="https://www.facebook.com/moizfaisal654?mibextid=ZbWKwL"
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
    </nav>
  );
}
