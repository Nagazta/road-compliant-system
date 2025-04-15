import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ReportDetails.css'; // Importing the CSS

function ReportDetails() {
  const { id } = useParams();
  const reports = [
    {
      id: 1,
      location: 'Main St & 5th Ave',
      description: 'Pothole causing traffic issues.',
      status: 'Pending',
      reporter: 'John Doe',
      date: '2025-04-01',
      additionalInfo: 'Located near the intersection of Main St & 5th Ave.',
      progress: 'Reported and under review',
    },
    {
      id: 2,
      location: 'Elm St & Oak Rd',
      description: 'Cracked pavement near pedestrian crossing.',
      status: 'Resolved',
      reporter: 'Jane Smith',
      date: '2025-03-15',
      additionalInfo: 'Area near a school zone, high foot traffic.',
      progress: 'Resolved and repaired.',
    },
    {
      id: 3,
      location: 'Broadway & 3rd',
      description: 'Damaged guardrail on the side of the road.',
      status: 'In Progress',
      reporter: 'Chris Johnson',
      date: '2025-03-30',
      additionalInfo: 'This area is a high-speed zone, which makes it dangerous.',
      progress: 'Repair work has begun.',
    },
  ];

  const report = reports.find((report) => report.id === parseInt(id));

  if (!report) {
    return <h2>Report not found</h2>;
  }

  return (
    <div className="report-details">
      <h1>Report Details</h1>
      <div className="details-container">
        <h2>{report.location}</h2>
        <p><strong>Description:</strong> {report.description}</p>
        <p><strong>Status:</strong> {report.status}</p>
        <p><strong>Reporter:</strong> {report.reporter}</p>
        <p><strong>Date Reported:</strong> {report.date}</p>
        <p><strong>Additional Info:</strong> {report.additionalInfo}</p>
        <p><strong>Progress:</strong> {report.progress}</p>
      </div>
    </div>
  );
}

export default ReportDetails;
