import React from 'react';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('form.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <section id="contact" className="section-contact">
       <div className="container-fluid px-lg-5">
          <div className="d-flex text-center mb-5">
            <h2 className="About">Contact</h2>
            <p className="know">Get in Touch</p>
          </div>
        <div className="row gy-5">
          <div className="col-md-4 col-lg-4 order-1 order-md-0 text-center text-md-start">
            <h2 className="mb-3 text-5 text-uppercase text-white">Address</h2>
            <p className="text-3 mb-4 text-light">Federal B Area<br />Block 2 Karachi<br />Pakistan</p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2"><i className="fas fa-phone"></i></span>+92 3162883190
            </p>
            <p className="text-3 mb-1 text-light">
              <span className="text-primary text-4 me-2"><i className="fab fa-whatsapp"></i></span>+92 3162883190
            </p>
            <p className="text-3 mb-4 text-light">
              <span className="text-primary text-4 me-2"><i className="fas fa-envelope"></i></span>moizfaisal654@gmail.com
            </p>
            <h2 className="mb-3 text-5 text-uppercase text-white">Follow Me</h2>
            <ul className="social-icons justify-content-center justify-content-md-start social-icons-muted">
              <li className="social-icons-dribbble">
                <a href="http://www.dribbble.com/harnishdesign/" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
              </li>
              <li className="social-icons-twitter">
                <a href="https://twitter.com/harnishdesign/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="social-icons-facebook">
                <a href="http://www.facebook.com/harnishdesign/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="social-icons-google">
                <a href="http://www.google.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
              </li>
              <li className="social-icons-github">
                <a href="http://www.github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-lg-8 order-0 order-md-1">
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-start text-white">Send us a note</h2>
            <form className="form-dark" id="contact-form" action="form.php" method="post"  onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-xl-6">
                  <input name="user_name" type="text" className="form-control py-3 px-4" required="" placeholder="Name " />
                </div>
                <div className="col-xl-6">
                  <input name="user_email" type="email" className="form-control py-3 px-4" required="" placeholder="Email" />
                </div>
                <div className="col">
                  <textarea name="message" className="form-control py-3 px-4" rows="5" required="" placeholder="Tell us more about your needs........"></textarea>
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button id="submit-btn" className="btn btn-primary rounded-pill d-inline-flex py-3 px-5" type="submit">Send Message</button>
              </p>
              <div className="Toastify"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
