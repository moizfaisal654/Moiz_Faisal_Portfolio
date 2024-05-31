import React from "react";

export default function About() {
 
  return (
    <>
      <section id="about" className="section bg-dark">
        <div className="container-fluid px-lg-5">
          <div className="d-flex text-center mb-5">
            <h2 className="About">About Me</h2>
            <p className="know">Know Me More</p>
          </div>
          <div className="row gy-5">
            <div className="About-detail col-lg-7 col-xl-8 text-center text-lg-start">
              <h2 className="text-7 fw-600 mb-3 text-white">
                I'm <span className="text-primary">Moiz Faisal,</span> a Web
                Developer
              </h2>
              <p className="text-white-50">
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-white-50">
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
              </p>
            </div>
            <div className="About-detail-right col-lg-5 col-xl-4">
              <div className="ps-lg-4">
                <ul className="list-style-2 list-style-light text-light">
                  <li>
                    <span className="fw-600 me-2">Name:</span>Moiz Faisal
                  </li>
                  <li>
                    <span className="fw-600 me-2">Email:</span>
                    <a href="mailto:moizfaisal654@gmail.com">
                      moizfaisal654@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="fw-600 me-2">Age:</span>20
                  </li>
                  <li className="Karachi">
                    <span className="fw-600 me-2">From:</span>Karachi, Pakistan
                  </li>
                </ul>
                <a
                  href="/Moiz%20Faisal%20Fd.pdf"
                  download="Moiz Faisal Fd.pdf"
                  className="Download bg-primary"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="brands-grid separator-border mt-5 separator-border-light">
            <div className="row sec-experience">
              <div className="col-6 col-md-3">
                <div className="year-Experience featured-box text-center">
                  <h4 className="text-12  mb-0 text-white-50">
                    <span>01</span>+
                  </h4>
                  <p className="mb-0 text-light">Years Experiance</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="Experience featured-box text-center">
                  <h4 className="text-12  mb-0 text-white-50">
                    <span>10</span>+
                  </h4>
                  <p className="mb-0 text-light">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="Experience featured-box text-center">
                  <h4 className="text-12  mb-0 text-white-50">
                    <span>10</span>+
                  </h4>
                  <p className="mb-0 text-light">Projects Done</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="Experience featured-box text-center">
                  <h4 className="text-12  mb-0 text-white-50">
                    <span>02</span>
                  </h4>
                  <p className="mb-0 text-light">Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
