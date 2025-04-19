import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ViewReports.css';

function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from the backend
    fetch('http://localhost:5000/api/report')
      .then((response) => response.json())
      .then((data) => {
        setReports(data); // Update the state with the fetched reports
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div className="view-reports">
      <h1>View Reports</h1>
      <ul className="report-list">
        {reports.map((report) => (
          <li key={report.id} className="report-item">
            <Link to={`/reports/${report.id}`} className="report-link">
              <h2>{report.location}</h2>
              <p>Status: {report.status}</p>
              <p>Date Reported: {report.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewReports;
