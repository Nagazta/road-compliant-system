import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Update path if needed

function Navbar() {
  return (
    <div className="navbar">
      <h1>ROAD-COMPLAINT SYSTEM</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report Damage</Link>
        <Link to="/reports">Report Details</Link>
      </div>
    </div>
  );
}

export default Navbar;
