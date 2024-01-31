import React from "react";

export default function Services() {
    
  return (
    <section id="services" className="section-services">
     <div className="container-fluid px-lg-5">
          <div className="d-flex text-center mb-5">
            <h2 className="About">Services</h2>
            <p className="know">What I Do</p>
          </div>
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="row featured-box style-3 mb-5">
                <div className="col-lg-3 featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-desktop"></i>
                </div>
                <div className="services-content col-lg-9">
                <h3 className="text-white">Web Design</h3>
                <p className="mb-0 text-white-50">
                Provide services create visually appealing and user-friendly websites that enhance online presence and engagement.
                </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="featured-box style-3 mb-5">
                <div className="featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <h3 className="text-white">UI/UX Design</h3>
                <p className="mb-0 text-white-50">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div> */}
            <div className="col-md-6">
              <div className="row featured-box style-3 mb-5">
                <div className="col-lg-3 featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="services-content col-lg-9">
                <h3 className="text-white">Web App Design &amp; Develop</h3>
                <p className="mb-0 text-white-50">
               Provide services craft responsive and interactive applications for an exceptional digital user experience.
                </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row featured-box style-3 mb-5">
                <div className="col-lg-3 featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="services-content col-lg-9">
                <h3 className="text-white">Web Maintainence</h3>
                <p className="mb-0 text-white-50">
                Provide ensure websites operate smoothly with regular updates, security enhancements, and content management.
                </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row featured-box style-3 mb-5">
                <div className="col-lg-3 featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-chart-area"></i>
                </div>
                <div className="services-content col-lg-9">
                <h3 className="text-white">Business Analysis</h3>
                <p className="mb-0 text-white-50">
                Provide data-driven insights and strategies to optimize business processes and decision-making.
                </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="featured-box style-3 mb-5">
                <div className="featured-box-icon text-primary  shadow-sm rounded bg-dark-1">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="text-white">SEO Marketing</h3>
                <p className="mb-0 text-white-50">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
