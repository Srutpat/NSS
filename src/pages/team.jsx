import React, { useState } from 'react';
import './team.css';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
const currentTeam = [
  {
    name: 'Rahil Patil',
    photo: img1,
    position: 'Coordinator',
    batch: '2024-25',
    email: 'rahul@example.com',
    phone: '+91 9876543210',
    instagram: 'https://instagram.com/rahul',
    linkedin: 'https://linkedin.com/in/rahul',
  },
  {
    name: 'Sneha More',
    photo: img2,
    position: 'Design Head',
    batch: '2024-25',
    email: 'sneha@example.com',
    phone: '+91 8765432109',
    instagram: 'https://instagram.com/sneha',
    linkedin: 'https://linkedin.com/in/sneha',
  },
  {
    name: 'Amit Jadhav',
    photo: 'amit.jpg',
    position: 'Technical Lead',
    batch: '2024-25',
    email: 'amit@example.com',
    phone: '+91 7654321098',
    instagram: 'https://instagram.com/amit',
    linkedin: 'https://linkedin.com/in/amit',
  },
  {
    name: 'Rahil Patil',
    photo: img1,
    position: 'Coordinator',
    batch: '2024-25',
    email: 'rahul@example.com',
    phone: '+91 9876543210',
    instagram: 'https://instagram.com/rahul',
    linkedin: 'https://linkedin.com/in/rahul',
  },
  {
    name: 'Sneha More',
    photo: img2,
    position: 'Design Head',
    batch: '2024-25',
    email: 'sneha@example.com',
    phone: '+91 8765432109',
    instagram: 'https://instagram.com/sneha',
    linkedin: 'https://linkedin.com/in/sneha',
  },
  {
    name: 'Amit Jadhav',
    photo: 'amit.jpg',
    position: 'Technical Lead',
    batch: '2024-25',
    email: 'amit@example.com',
    phone: '+91 7654321098',
    instagram: 'https://instagram.com/amit',
    linkedin: 'https://linkedin.com/in/amit',
  },
];

const previousTeams = {
  '2023-24': [
    {
      name: 'Pooja Deshmukh',
      photo: 'pooja.jpg',
      position: 'Coordinator',
      batch: '2023-24',
      email: 'pooja@example.com',
      phone: '+91 9988776655',
      instagram: 'https://instagram.com/pooja',
      linkedin: 'https://linkedin.com/in/pooja',
    },
    {
      name: 'Nikhil Pawar',
      photo: 'nikhil.jpg',
      position: 'Design Head',
      batch: '2023-24',
      email: 'nikhil@example.com',
      phone: '+91 8877665544',
      instagram: 'https://instagram.com/nikhil',
      linkedin: 'https://linkedin.com/in/nikhil',
    },
  ],
};

const Team = () => {
  const [visibleYear, setVisibleYear] = useState(null);

  const renderCard = (member, idx) => (
  <div className="card" key={idx}>
    <div
      className="card2"
      style={{
        backgroundImage: `url(${member.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card-content">
         <h3>{member.name}</h3>
        <p className="role">{member.position}</p>
        <p className="batch">{member.batch}</p>
        <div className="contact-info">
          <p>Email: {member.email}</p>
          <p>Phone: {member.phone}</p>
          <div className="social-links">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

    {/* This is the new part - displays name and position below card */}
    <div className="card-footer">
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.position}</p>
    </div>
  </div>
);

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>Current Core Team (2024-25)</h2>
        <div className="team-grid">
          {currentTeam.map(renderCard)}
        </div>
      </section>

      <section className="about-section">
        <h2>Previous Core Teams</h2>
        {Object.entries(previousTeams).map(([year, team]) => (
          <div key={year} className="team-year">
            <button onClick={() => setVisibleYear(visibleYear === year ? null : year)}>
              {visibleYear === year ? 'Hide' : 'Show'} Team {year}
            </button>
            {visibleYear === year && (
              <div className="team-grid">
                {team.map(renderCard)}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team;
