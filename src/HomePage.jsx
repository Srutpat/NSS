import React from "react";
import "./HomePage.css";
import "../src/global.css";
import logo from "./assets/logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Silk from "./components/SilkBackground";
import { motion } from "framer-motion";
import CircularText from "./components/CircularText";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HomePage = () => {
  return (
    <motion.div className="container" initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.nav className="navbar" variants={fadeInUp}>
        <div className="navbar-left">
          <img src={logo} alt="NSS Logo" />
          <h1>NSS PCCOE</h1>
        </div>
        <div className="navbar-right">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Achievements</a>
          <a href="#">Team</a>
          <a href="#">Winter Camp</a>
          <a href="#">Contact Us</a>
        </div>
      </motion.nav>

      <section className="silk-hero-section">
        <div className="canvas-container">
          <Silk
            color="#E56C20"
            speed={4}
            scale={1.2}
            noiseIntensity={1.8}
            rotation={0.2}
          />
        </div>
        <div className="silk-hero-content">
          <div className="hero-left">
            <CircularText
              text="NSS * We Build Nation * "
              spinDuration={15}
              className="hero-circle"
            />
          </div>
          <div className="hero-right">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              Not Me But You
            </motion.h2>
            <p className="hero-tagline">
              Join our mission to uplift communities and empower lives.
            </p>
            <div className="stats">
              <div><strong>1000+</strong> Volunteers</div>
              <div><strong>50+</strong> Events</div>
              <div><strong>20+</strong> Awards</div>
            </div>
            <button className="join-nss-btn">Join NSS</button>
          </div>
        </div>
      </section>

      <motion.section className="carousel-section" variants={fadeInUp}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div className="carousel-slide">
            <img src="src/assets/events/event1.jpeg" alt="Event 1" />
            <h3>Blood Donation Camp</h3>
            <p>Organized successfully with 150+ units collected.</p>
          </div>
          <div className="carousel-slide">
            <img src="src/assets/events/event1.jpeg" alt="Event 2" />
            <h3>Tree Plantation Drive</h3>
            <p>Planted 500+ saplings in rural villages.</p>
          </div>
          <div className="carousel-slide">
            <img src="src/assets/events/event1.jpeg" alt="Event 3" />
            <h3>Cleanliness Awareness</h3>
            <p>Inspired over 1000 students through street plays and campaigns.</p>
          </div>
        </Carousel>
      </motion.section>

      <motion.section className="quote-section" variants={fadeInUp}>
        <em>
          “The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi
        </em>
      </motion.section>

      <motion.footer className="footer" variants={fadeInUp}>
        &copy; 2025 NSS PCCOE | All Rights Reserved
      </motion.footer>
    </motion.div>
  );
};

export default HomePage;
