import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  // For text change
  const texts = [
    "I'm Moiz Faisal",
    "I'm Freelancer",
    "I'm Web Developer",
    "I'm Web Designer",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < texts[textIndex].length) {
        // Increment the current index to reveal the next letter
        setCurrentIndex((prevIndex) => prevIndex + 1);

        // Update the current text to show the revealed letters
        setCurrentText(texts[textIndex].substring(0, currentIndex + 1));
      } else {
        // If all letters are revealed, move to the next text
        clearInterval(timer);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentIndex(0);
        }, 1000); // Wait for 1 second before transitioning to the next text
      }
    }, 100); // Adjust the timing as needed

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, textIndex, texts]);

  return (
    <section id="home">
      <div className="hero-wrap ">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div className="hero-bg parallax"></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="fs-4 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="fs-2 fw-bold text-white mb-2 mb-md-3">
                  <div className="Typewriter" data-testid="typewriter-wrapper">
                    <span className="d-block">{currentText}| </span>
                    <span className="Typewriter__cursor"></span>
                  </div>
                </h2>
                <p className="fs-5 text-light mb-4">
                  based in Los Angeles, California.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2 py-3 px-5"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Hire Me button clicked"); // Add this line for debugging
                    scrollToSection("contact");
                  }}
                >
                  Hire Me
                </a>

                <br />
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Scroll Down button clicked"); // Add this line for debugging
                    scrollToSection("about");
                  }}
                  id="scroll-down-arrow"
                  className="btn btn-primary btn-lg rounded-circle shadow mt-5"
                >
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
