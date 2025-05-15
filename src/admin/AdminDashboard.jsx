import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminDashboard.css'; 

function AdminDashboard() {
  const [reportsCount, setReportsCount] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  useEffect(() => {
    const fetchReportsCount = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch('http://localhost:5000/api/reports/count', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to fetch reports count');
        const data = await res.json();
        setReportsCount(data.count);
      } catch (err) {
        setError('Could not load reports count.');
        console.error(err);
      }
    };

    fetchReportsCount();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Welcome, Admin!</h1>

      {error && <p className="error">{error}</p>}

      <div className="dashboard-stat">
        <h2>Total Reports</h2>
        <p>{reportsCount}</p>
      </div>

    </div>
  );
}

export default AdminDashboard;
