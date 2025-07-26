import React, { useState } from 'react';
import './team.css';
import poImg from '../assets/images/po.jpeg';
import shantanu from '../assets/images/shantanu.png';
import swaraj from '../assets/images/swaraj.png';
import atharva from '../assets/images/atharva.png';
import jivan from '../assets/images/jivan.png';
import sachin from '../assets/images/sachin.jpeg';


const teamData = {
  '2025-26': [
    { name: 'Shantanu Mali', position: 'NSS Overall Student Coordinator (President)', batch: '2025-26', photo: shantanu },
    { name: 'Aditya Sabale', position: 'Senior Advisor', batch: '2025-26', photo: '' },
    { name: 'Prathamesh Khot', position: 'Treasurer', batch: '2025-26', photo: '' },
    { name: 'Om Jadhav', position: 'Cultural Head', batch: '2025-26', photo: '' },
    { name: 'Sushant Kadam', position: 'Documentation Head', batch: '2025-26', photo: '' },
    { name: 'Rishika Dhole', position: 'Social Media Head', batch: '2025-26', photo: '' },
    { name: 'Aadesh Samudre', position: 'Computer Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Manali Thorat', position: 'Computer Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Omkar Shevkari', position: 'Civil Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Gauri Darekar', position: 'Civil Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Rohit Kulkarni', position: 'Mechanical Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Sailee Gore', position: 'Mechanical Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Rahul Hile', position: 'IT Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Rutuja Bobade', position: 'IT Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Govind Bamble', position: 'CSE (AIML) Dept. Coordinator', batch: '2025-26', photo: '' },
    { name: 'Chirag Jathe', position: 'ENTC Dept. Coordinator', batch: '2025-26', photo: '' },
  ],
  '2024-25': [
    { name: 'Sachin Girawale', position: 'NSS Overall Student Coordinator', batch: '2024-25', photo: sachin },
    { name: 'Swaraj Bangar', position: 'NSS Student Co-Coordinator', batch: '2024-25', photo: swaraj },
    { name: 'Atharva Jadhav', position: 'NSS Student Co-Coordinator', batch: '2024-25', photo: atharva },
    { name: 'Jivan Karande', position: 'Senior Advisor', batch: '2024-25', photo: jivan },
    { name: 'Prajakta Thorat', position: 'Cultural Head', batch: '2024-25', photo: '' },
    { name: 'Ritik Lipte', position: 'Marketing & Publicity Head', batch: '2024-25', photo: '' },
    { name: 'Vedang Nage', position: 'Social Media Head', batch: '2024-25', photo: '' },
    { name: 'Avdhut Vatni', position: 'Computer Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Siddhi Solapurkar', position: 'Computer Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Lubdha Shirode', position: 'Computer (Regional) Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Vedant Rajhans', position: 'Computer (Regional) Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Sahil Misale', position: 'Civil Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Shraddha Patil', position: 'Civil Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Venktesh Gawade', position: 'Mechanical Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Geeta Shinde', position: 'Mechanical Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Samruddhi Khadse', position: 'IT Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Utkarsh Jadhav', position: 'IT Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Bhavesh Pagare', position: 'CSE (AIML) Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Tejashree Chougule', position: 'CSE (AIML) Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Nikita Yadav', position: 'ENTC Dept. Coordinator', batch: '2024-25', photo: '' },
    { name: 'Tejas Kumavat', position: 'ENTC Dept. Coordinator', batch: '2024-25', photo: '' },
  ],
  '2023-24': [
    { name: 'Abhijit Bansode', position: 'NSS Overall Student Coordinator', batch: '2023-24', photo: '' },
    { name: 'Sachin Girawale', position: 'Computer Dept. Coordinator', batch: '2023-24', photo: sachin },
    { name: 'Mrunal Chopade', position: 'Computer Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Swaraj Bangar', position: 'IT Dept. Coordinator', batch: '2023-24', photo: swaraj },
    { name: 'Sakshi Londhe', position: 'IT Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Jivan Karande', position: 'CSE (AIML) Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Divya Pawar', position: 'CSE (AIML) Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Akanksha Dandage', position: 'Civil Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Sharad Narute', position: 'Civil Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Prem Chavhan', position: 'Mechanical Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Harshali Solanke', position: 'Mechanical Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Sudarshan Kalse', position: 'ENTC Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Shruti Mule', position: 'ENTC Dept. Coordinator', batch: '2023-24', photo: '' },
    { name: 'Gourav Arkas', position: 'NSS Advisor', batch: '2023-24', photo: '' },
    { name: 'Geeta Shinde', position: 'Cultural Head', batch: '2023-24', photo: '' },
    { name: 'Hari Padalwar', position: 'Marketing Head', batch: '2023-24', photo: '' },
    { name: 'Aniket Shastri', position: 'Social Media Head', batch: '2023-24', photo: '' },
  ],
};

const Team = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');

  const renderCard = (member, idx) => (
    <div className="team-card" key={idx}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${member.photo || '/placeholder.jpg'})` }}
      >
        <div className="card-hover">
          <h3>{member.name}</h3>
          <p>{member.position}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="team-container">
      <div className="po-section">
        <img src={poImg} alt="Sandip Jagdale" />
        <div className="po-details">
          <h2>Prof. Sandip Jagdale</h2>
          <p>Program Officer (PO), NSS Unit</p>
        </div>
      </div>

      <div className="team-selector">
        {Object.keys(teamData).map((year) => (
          <button
            key={year}
            className={selectedYear === year ? 'active' : ''}
            onClick={() => setSelectedYear(year)}
          >
            Team {year}
          </button>
        ))}
      </div>

      <div className="team-grid">
        {teamData[selectedYear].map(renderCard)}
      </div>
    </div>
  );
};

export default Team;
