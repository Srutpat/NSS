import React from "react";
import "./wintercamp.css";

const Wintercamp = () => {
  const activities = [
    { icon: "🧹", title: "Cleanliness Drive", desc: "Promoting hygiene and sanitation in public spaces." },
    { icon: "🌳", title: "Plantation Drive", desc: "Planting trees to support the environment." },
    { icon: "🍱", title: "Food Serving", desc: "Distributing hot meals to underprivileged communities." },
    { icon: "👨‍🏫", title: "Teaching Kids", desc: "Fun and educational sessions with village children." },
    { icon: "🎭", title: "Cultural Night", desc: "Music, dance, and drama to celebrate local culture." },
    { icon: "👴", title: "Visiting Elders", desc: "Offering care, conversation, and support to senior citizens." },
  ];

  return (
    <div className="wintercamp">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          {/* <h1>Winter Camp 2024 ❄️</h1>
          <p>Spreading Warmth and Smiles</p>
          <button>Explore Our Journey</button> */}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About the Camp</h2>
        <p>
          In December 2024, our NSS Unit conducted a transformative 7-day winter camp across Malegaon Khurd, Community.
          With 50+ volunteers, we served, educated, and created lasting memories while making a positive impact.
        </p>
        <div className="info-tags">
          <b> 
            <span>📅 7 Days</span>
          <span>📍 Malegaon, Khurd, Pune</span>
          <span>🤝 50+ Volunteers</span>
          </b>
         
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <h2>Activities We Did</h2>
        <div className="activities-grid">
          {activities.map((act, index) => (
            <div key={index} className="activity-card">
              <div className="icon">{act.icon}</div>
              <h3>{act.title}</h3>
              <p>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2>Impact in Numbers</h2>
        <blockquote>
          “Thank you for making our village brighter.” – A local elder
        </blockquote>
        <div className="impact-stats">
          {/* <span>🏡 1 Villages Reached</span>
          <span>🙋 200+ People Helped</span> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 NSS Unit | Built with ❤️ by the Winter Camp Team</p>
      </footer>
    </div>
  );
};

export default Wintercamp;
