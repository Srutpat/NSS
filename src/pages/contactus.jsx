import React from "react";
import "./contactus.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-text">
          <h1>Let's Connect </h1>
          <p>Have questions, feedback, or ideas? We’re excited to hear from you!</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        {/* Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xwpqowwe"
          method="POST"
        >
          <h2>Send a Message</h2>

          <div className="form-group">
            <label htmlFor="email"> Your Email</label>
            <input type="email" name="email" id="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message"> Your Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Type your message here..." required></textarea>
          </div>

          <button type="submit"> Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2> Contact Details</h2>
          <div className="info-card">
            <span></span>
            <div>
              <h4>Our Location</h4>
              <p>NSS Unit, XYZ College, Maharashtra</p>
            </div>
          </div>

          <div className="info-card">
            <span></span>
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card">
            
            <div>
              <h4>Email</h4>
              <p>pratik34@gmaiol.com</p>
            </div>
          </div>

          {/* Social Media */}
        <div className="social-links">
       
        <div className="social-links">
  <h3>Connect With Us</h3>
  <div className="social-link-list">
    <a
      href="https://www.instagram.com/nss_pccoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noreferrer"
      className="social-box instagram"
    >
      <span className="icon"></span>
      <span className="text">@nss_pccoe(Instagram)</span>
    </a>
    <a
      href="https://www.youtube.com/@nsspccoe1615"
      target="_blank"
      rel="noreferrer"
      className="social-box youtube"
    >
      <span className="icon"></span>
      <span className="text">@nsspccoe1615(YouTube)</span>
    </a>
  </div>
</div>

</div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
