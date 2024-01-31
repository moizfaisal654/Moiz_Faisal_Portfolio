import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Resume() {
  return (
    <section id="resume" className="section-resume bg-dark">
      <div className="container-fluid px-lg-5">
        <div className="d-flex text-center mb-5">
          <h2 className="About">Summary</h2>
          <p className="know">Resume</p>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">My Education</h2>
            <div className="Resume-Education rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2006 - 2018</p>
              <h3 className="text-5 text-white">Matriculation</h3>
              <p className="text-primary">Metropolitan Academy</p>
              <p className="mb-0 text-white-50">
              Provide structured learning environments for students,from early childhood to acquire knowledge, skills, and social development.
              </p>
            </div>
            <div className="Resume-Education rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2019 - 20020</p>
              <h3 className="text-5 text-white">Intermediate</h3>
              <p className="text-primary">Sir Adamjee Institute</p>
              <p className="mb-0 text-white-50">
              higher education institutions that offer specialized academic and vocational programs beyond high school.
              </p>
            </div>
            <div className="Resume-Education rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2021 - 2025</p>
              <h3 className="text-5 text-white">Bachelor's Degree</h3>
              <p className="text-primary">Dha Suffa University</p>
              <p className="mb-0 text-white-50">
              After completing graduation,individuals consider pursuing higher education or entering the workforce, depending on their career goals and aspirations.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">My Experience</h2>
            <div className="Resume-Experience rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2021</p>
              <h3 className="text-5 text-white">Front End Web Developer</h3>
              <p className="text-primary">Internship at Source Code</p>
              <p className="mb-0 text-white-50">
              Provides hands-on experience in designing and building user interfaces, enhancing practical skills in HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="Resume-Experience rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2022</p>
              <h3 className="text-5 text-white">Front End Web Developer</h3>
              <p className="text-primary">Internship at Creatics</p>
              <p className="mb-0 text-white-50">
              Provides hands-on experience in designing and building user interfaces, enhancing practical skills in HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="Resume-Experience rounded p-4 mb-4">
              <p className="badge bg-primary text-2 fw-400">2022</p>
              <h3 className="text-5 text-white">Wordpress</h3>
              <p className="text-primary">Internship at Legacy World Bpo</p>
              <p className="mb-0 text-white-50">
              Provides hands-on experience in designing and building user interfaces for websites, enhancing practical skills in HTML, CSS, JavaScript, and Wordpress.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-6 fw-600 mt-4 mb-4 text-white">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Web Design <span className="float-end">65%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "65%" }} 
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              HTML/CSS <span className="float-end">95%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%" }} 
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              JavaScript <span className="float-end">80%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }} 
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              React JS <span className="float-end">70%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%" }} 
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Wordpress <span className="float-end">60%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }} 
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Bootstrap <span className="float-end">99%</span>
            </p>
            <div className="progress mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%" }} 
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none px-5 py-3"
            href="/Moiz%20Faisal%20Fd.pdf"
            download="Moiz Faisal Fd.pdf"
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
