import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

function Home() {
  return (
    <div className="home-dashboard">
      <h1>Road Damage Reporting Dashboard</h1>
      <p>Welcome! Help improve road safety by reporting damaged areas.</p>

      <div className="dashboard-buttons">
        <Link to="/report" className="dash-button">Report Damage</Link>
        <Link to="/reports" className="dash-button">View Reports</Link>
      </div>

     
    </div>
  );
}

export default Home;
