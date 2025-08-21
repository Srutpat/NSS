import React, { useState } from 'react';
import './activities.css';

// Import images statically (you may adjust paths as needed)
import img1 from '../assets/images/1.png';
import img3 from '../assets/images/3.jpg';
import img7 from '../assets/images/7.jpg';
import img11 from '../assets/images/11.jpg';

const activities = [
  {
    id: 1,
    title: "Village Cleaning Drive",
    date: "2025-01-15",
    description: "A collective cleaning campaign carried out with villagers and volunteers to promote hygiene and Swachh Bharat Abhiyan.",
    images: [img3, img11]
  },
  {
    id: 2,
    title: "Health Awareness Seminar",
    date: "2025-02-03",
    description: "Organized a seminar with local doctors to raise awareness about common diseases and hygiene practices.",
    images: [img7, img11]
  },
  {
    id: 3,
    title: "Tree Plantation",
    date: "2025-03-12",
    description: "Planted over 200 saplings around the village with enthusiastic participation from school children.",
    images: [img1, img11]
  },
  {
    id: 4,
    title: "Digital Literacy Workshop",
    date: "2025-04-20",
    description: "Taught basic computer and mobile usage to elderly villagers and school kids using demo videos and activities.",
    images: [img7, img11]
  }
];

const Activities = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="activities-container">
      <h2 className="section-title">Activities Index</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Activity Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((act, index) => (
            <tr key={act.id} onClick={() => setSelected(act)}>
              <td>{index + 1}</td>
              <td>{act.title}</td>
              <td>{act.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="activity-popup" onClick={() => setSelected(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <h3>{selected.title}</h3>
            <p><strong>Date:</strong> {selected.date}</p>
            <p>{selected.description}</p>
            <div className="carousel">
              {selected.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Slide ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
