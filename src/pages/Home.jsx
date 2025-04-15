import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // optional for styling

function Home() {
  return (
    <div className="home-dashboard">
      <h1>🚧 Road Damage Reporting Dashboard</h1>
      <p>Welcome! Help improve road safety by reporting damaged areas.</p>

      <div className="dashboard-buttons">
        <Link to="/report" className="dash-button">📤 Report Damage</Link>
        <Link to="/reports" className="dash-button">📋 View Reports</Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Reports</h3>
          <p>23</p> 
        </div>
        <div className="stat-card">
          <h3>Pending Fixes</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Resolved</h3>
          <p>11</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
