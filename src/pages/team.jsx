import React, { useState } from 'react';
import './team.css';
import poImg from '../assets/images/po.jpeg';
// import shantanu from '../assets/images/shantanu.png';
import swaraj from '../assets/images/swaraj.png';
import atharva from '../assets/images/atharva.png';
import jivan from '../assets/images/jivan.png';
import sachin from '../assets/images/sachin.jpeg';


const authorities = [
  {
    name: 'Dr. Govind Kulkarni',
    position: 'Director, PCCOE',
    photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757250373/director-PCCoE_w5oldf.jpg'
  },
  {
    name: 'Prof. Padmakar Deshmukh',
    position: 'Dean, SDW',
    photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757250408/PADeshmukh_ve26xs.jpg'
  },
  {
    name: 'Prof. Sandip Jagdale',
    position: 'Program Officer (PO), NSS Unit',
    photo: poImg
  }
];

const teamData = {
  '2025-26': [
    { name: 'Shantanu Mali', position: 'NSS Overall Student Coordinator (President)', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248909/SHANTANU_MALI__Overall_Student_Coordinator_rt6oem.jpg' },
    { name: 'Aditya Sabale', position: 'Senior Advisor', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248909/ADITYA_SABALE__Senior_Advisor_aie6z1.jpg' },
    { name: 'Prathamesh Khot', position: 'Treasurer', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248909/PRATHAMESH_KHOT_FINANCE_HEAD_wjrhfh.jpg' },
    { name: 'Om Jadhav', position: 'Cultural Head', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248907/OM_JADHAV_CULTURAL_HEAD_abruvm.jpg' },
    { name: 'Sushant Kadam', position: 'Documentation Head', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248908/SUSHANT_KADAM_DOCUMENTATION_HEAD_r3ukeo.jpg' },
    { name: 'Rishika Dhole', position: 'Social Media Head', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248915/RISHIKA_DHOLE_SOCIAL_MEDIA_HEAD_cjfjmu.jpg' },
    { name: 'Aadesh Samudre', position: 'Computer Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248914/AADESH_SAMUDRE__COMP._DEPT._COORDINATOR_ris4vj.jpg' },
    { name: 'Manali Thorat', position: 'Computer Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/MANALI_THORAT__COMP._DEPT._COORDINATOR_hr5t6y.jpg' },
    { name: 'Omkar Shevkari', position: 'Civil Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248914/OMKAR_SHEVKARI_CIVIL_DEPT._COORDINATOR_aedqkd.jpg' },
    { name: 'Gauri Darekar', position: 'Civil Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248908/GAURI_DAREKAR__CIVIL_DEPT._COORDINATOR_pukcni.jpg' },
    { name: 'Rohit Kulkarni', position: 'Mechanical Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/ROHIT_KULKARNI__MECH._DEPT._COORDINATOR_guiev4.jpg' },
    { name: 'Sailee Gore', position: 'Mechanical Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248908/SAILEE_GORE__MECH._DEPT._COORDINATOR_hpeikp.jpg' },
    { name: 'Rahul Hile', position: 'IT Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248910/RAHUL_HILE__IT_DEPT._COORDINATOR_nqwnw7.jpg' },
    { name: 'Rutuja Bobade', position: 'IT Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248913/RUTUJA_BOBADE_IT_DEPT._COORDINATOR_qrcjy1.jpg' },
    { name: 'Govind Bamble', position: 'CSE (AIML) Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248907/GOVIND_BAMBLE__AIML_DEPT._COORDINATOR_yzwmia.jpg' },
    { name: 'Shraddha Golekar', position: 'CSE (AIML) Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248907/SHRADDHA_GOLEKAR__AIML_DEPT._COORDINATOR_v3ovvm.jpg' },
    { name: 'Chirag Jathe', position: 'ENTC Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/CHIRAG_JATHE__E_TC_DEPT._COORDINATOR_csfrme.jpg' },
    { name: 'Yash Unhale', position: 'ENTC Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/YASH_UNHALE__E_TC_DEPT._COORDINATOR_drzl05.jpg' },
    { name: 'Nihar Salvi', position: 'CS RL Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/NIHAR_SALVI__COMP_reg_._DEPT._COORDINATOR_pgpgjv.jpg' }
    // { name: 'Yash Unhale', position: 'ENTC Dept. Coordinator', batch: '2025-26', photo: 'https://res.cloudinary.com/dh560sdbe/image/upload/v1757248905/YASH_UNHALE__E_TC_DEPT._COORDINATOR_drzl05.jpg' }
  
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
      {/* Authorities */}
      <div className="authorities-section">
        {authorities.map((auth, idx) => (
          <div className="authority-card" key={idx}>
            <img src={auth.photo} alt={auth.name} />
            <div className="authority-details">
              <h2>{auth.name}</h2>
              <p>{auth.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Selector */}
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

      {/* Team Members */}
      <div className="team-grid">
        {teamData[selectedYear].map(renderCard)}
      </div>
    </div>
  );
};

export default Team;
