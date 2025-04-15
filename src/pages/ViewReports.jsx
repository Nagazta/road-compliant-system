import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ViewReports.css'; // Importing the CSS

function ViewReports() {
  const reports = [
    { id: 1, location: 'Main St & 5th Ave', status: 'Pending', date: '2025-04-01' },
    { id: 2, location: 'Elm St & Oak Rd', status: 'Resolved', date: '2025-03-15' },
    { id: 3, location: 'Broadway & 3rd', status: 'In Progress', date: '2025-03-30' },
  ];

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
