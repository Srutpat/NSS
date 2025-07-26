import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about_us.css";
import heroImage from "../assets/banner.jpeg";
import SpotlightCard from "./SpotlightCard";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container">
      <header
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero-content">
          <h1>About National Service Scheme (NSS)</h1>
          <p>“Not me but you” – Building a better society through service</p>
        </div>
      </header>

      <section className="mission-vision-section" data-aos="fade-up">
  <div className="mission-vision-card">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.15)">
      <h2>Our Mission</h2>
      <p>
        To instill the spirit of voluntary service and community engagement among students,
        promoting social awareness, leadership, and nation-building.
      </p>
    </SpotlightCard>

    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 94, 98, 0.15)">
      <h2>Our Vision</h2>
      <p>
        Creating a generation of responsible and active citizens dedicated to improving the
        quality of life in rural and urban communities through inclusive and sustainable
        development.
      </p>
    </SpotlightCard>
  </div>
</section>
      <section className="about-activities" data-aos="fade-up">
        <h2>What We Do</h2>
        <ul>
          <li>Organize cleanliness drives and health check-up camps</li>
          <li>Conduct awareness campaigns (environment, education, gender, etc.)</li>
          <li>Host blood donation drives and tree plantations</li>
          <li>Support education for underprivileged children</li>
          <li>Promote sustainable practices through workshops and events</li>
        </ul>
      </section>

      <section className="about-values" data-aos="fade-right">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-box" data-aos="zoom-in">
            <h3>Service</h3>
            <p>Helping communities with dedication and empathy.</p>
          </div>
          <div className="value-box" data-aos="zoom-in">
            <h3>Leadership</h3>
            <p>Empowering youth to lead social change initiatives.</p>
          </div>
          <div className="value-box" data-aos="zoom-in">
            <h3>Unity</h3>
            <p>Building bridges between diverse groups and backgrounds.</p>
          </div>
          <div className="value-box" data-aos="zoom-in">
            <h3>Empowerment</h3>
            <p>Developing confidence and skills in volunteers and communities.</p>
          </div>
        </div>
      </section>

      <section className="about-cta" data-aos="fade-up">
        <h2>Join NSS, Be the Change!</h2>
        <p>Become a part of our journey to make India cleaner, healthier, and more inclusive.</p>
        <button onClick={() => alert("Redirect to Join Form or Info")}>Get Involved</button>
      </section>
    </div>
  );
}

export default About;
