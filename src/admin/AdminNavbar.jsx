import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function AdminNavbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // clear token
    onLogout(false); // update login state in AppWrapper
    navigate('/admin/login'); // redirect to login page
  };

  return (
    <div className="navbar">
      <h1>ROAD-COMPLAINT SYSTEM</h1>
      <div className="nav-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/reports">View Reports</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default AdminNavbar;
