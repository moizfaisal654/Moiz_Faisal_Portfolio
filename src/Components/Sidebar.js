import React  from "react";
import profileImage from "../profile.png";

function Sidebar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 100; // Replace with the actual height of your navigation bar
      window.scrollTo({
        top: section.offsetTop - navHeight, // Subtract the navigation bar height from the top offset
        behavior: "smooth",
      });
    }

    };
  
  

  return (
    <nav className="container-fluid sidebar bg-dark text-white">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active text-white"
              href="#"
              onClick={() => scrollToSection("#")}
            >
              <img src={profileImage} alt="" style={{ opacity: "0.7" }} />
              <h2>Moiz Faisal</h2>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#home"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#services"
              onClick={() => scrollToSection("services")}
            >
              What I Do
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#resume"
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#testinomial">
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="social-icons justify-content-center justify-content-md-start social-icons-muted">
          <li className="social-icons-dribbble">
            <a
              href="http://www.dribbble.com/harnishdesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
          <li className="social-icons-twitter">
            <a
              href="https://twitter.com/harnishdesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-icons-facebook">
            <a
              href="http://www.facebook.com/harnishdesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-icons-google">
            <a
              href="http://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
          </li>
          <li className="social-icons-github">
            <a
              href="http://www.github.com/"
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

export default Sidebar;
