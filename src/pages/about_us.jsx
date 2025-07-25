import React from 'react';
import { Link } from 'react-router-dom';
import './about_us.css'; // Assuming you have a CSS file for styling
import nssImage from '../assets/logo.png';
const AboutUs = () => {
  

  return (
    <div className="about-container">
      <h1>About NSS - PCCoE</h1>

      <section className="about-section-card">
        <div className="about-content">
          <div className="about-text">
            <h2>About NSS</h2>
            <p>
              National Service Scheme comes under the Ministry of Youth Affairs and Sports, Government of India and NSS cell,
              Higher and Technical Education, Govt. of Maharashtra. NSS was launched in Gandhiji's Centenary year, 1969-70.
            </p>
            <p>
              Understanding the need of social development of youth from technical fields, NSS was started in 2008-09 in Pimpri
              Chinchwad College of Engineering, Nigdi. The scheme aims to inculcate social welfare in students, and to provide
              better service to society through voluntary work.
            </p>
            <p>
              PCCoE NSS team performs social work through two verticals: <strong>Regular Activities</strong> and <strong>Special Winter Camp</strong>.
            </p>
          </div>
          <div className="about-image">
            <img src={nssImage} alt="NSS Activity" />
          </div>
        </div>
        <div className="about-cards-container">
          <div className="about-card">
            <h3>Objective</h3>
            <p>
              To inculcate social values and social awareness among students and serve the society.
            </p>
          </div>

          <div className="about-card">
            <h3>Outcome</h3>
            <p>
              Judged by number of students enrolled vs those benefited.
            </p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default AboutUs;
