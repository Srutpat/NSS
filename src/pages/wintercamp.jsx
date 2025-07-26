import React, { useEffect } from "react";
import "./WinterCamp.css";
import memory1 from "../assets/images/memory1.jpg";
import memory2 from "../assets/images/memory2.jpg";
import memory3 from "../assets/images/memory3.jpg";
import memory4 from "../assets/images/memory4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';




const WinterCamp = () => {
  const images = [memory1, memory2, memory3, memory4];

  const events = [
    {
      day: "Day 1",
      title: "Inauguration Ceremony",
      description: "A soulful start with flag hoisting, volunteer oath, and orientation.",
    },
    {
      day: "Day 2",
      title: "Cleanliness Drive",
      description: "Volunteers cleaned public areas and spread messages of hygiene.",
    },
    {
      day: "Day 3",
      title: "Awareness Rally",
      description: "Focused on social issues like child education and environment.",
    },
    {
      day: "Day 4",
      title: "Student Teaching",
      description: "Educational sessions for village school children and teens.",
    },
    {
      day: "Day 5",
      title: "Cultural Night",
      description: "Dance, music, drama – celebrating local culture & talents.",
    },
    {
      day: "Day 6",
      title: "Health Camp",
      description: "Medical checkups and awareness sessions for villagers.",
    },
    {
      day: "Day 7",
      title: "Closing Ceremony",
      description: "Reflections, certificates, and heartfelt goodbyes.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="wintercamp-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-text" data-aos="fade-down">
          <h1>Welcome to NSS Winter Camp</h1>
          <p>Empowering Rural Youth Through Knowledge & Action</p>
        </div>
      </section>

      {/* About the Camp */}
      <section className="about-camp-section" data-aos="fade-up">
        <div className="about-camp-content">
          <h2 className="about-camp-title">About the Camp</h2>
          <p className="about-camp-description">
            The NSS Winter Camp is a week-long immersion of service and learning
            in rural communities. Volunteers live together, work on local
            development projects, educate school children, and engage in
            awareness activities to create lasting social impact. It builds
            leadership, compassion, and community spirit — one day at a time.
          </p>
        </div>
      </section>

      {/* Timeline / Events */}
      <section className="timeline-section" data-aos="fade-up">
        <h2>Journey Through the Week</h2>
        <div className="timeline-grid">
          {events.map((event, index) => (
            <div className="timeline-card" key={index} data-aos="zoom-in">
              <div className="day-badge">{event.day}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section" data-aos="fade-up">
        <h2>Camp Memories</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Memory ${idx + 1}`}
              className="gallery-image"
              data-aos="zoom-in"
            />
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="quotes-section" data-aos="zoom-in">
        <blockquote>
          "The best way to find yourself is to lose yourself in the service of
          others." – Mahatma Gandhi
        </blockquote>
        <blockquote>"We rise by lifting others – and we did just that."</blockquote>
      </section>

      {/* Stats */}
      <section className="stats-section" data-aos="fade-up">
        <div className="impact-stats">
  <div className="stat-card">
   <h3>👥 <CountUp end={50} duration={4} />+ Volunteers</h3>
    <p>Driven by passion and purpose</p>
  </div>
  <div className="stat-card">
    <h3>🕒 <CountUp end={300} duration={5} />+ Hours</h3>
    <p>Of selfless community service</p>
  </div>
  <div className="stat-card">
    <h3>📅  <CountUp end={30} duration={3} />+ Events</h3>
    <p>From awareness to action</p>
  </div>
</div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 NSS Winter Camp | Designed with Purpose and Passion</p>
      </footer>
    </div>
  );
};

export default WinterCamp;
