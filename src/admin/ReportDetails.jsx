import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ReportDetails.css'; // Importing the CSS

function ReportDetails() {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    // Fetch the specific report using the id from the URL
    fetch(`http://localhost:5000/api/report/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReport(data); // Update the state with the fetched report data
      })
      .catch((error) => {
        console.error('Error fetching report details:', error);
      });
  }, [id]);

  if (!report) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="report-details">
      <h1>Report Details</h1>
      <div className="details-container">
        <h2>{report.location}</h2>
        <p><strong>Description:</strong> {report.description}</p>
        <p><strong>Date Reported:</strong> {report.date}</p>
        {report.status && <p><strong>Status:</strong> {report.status}</p>}
        {report.reporter && <p><strong>Reporter:</strong> {report.reporter}</p>}
        {report.additionalInfo && <p><strong>Additional Info:</strong> {report.additionalInfo}</p>}
        {report.progress && <p><strong>Progress:</strong> {report.progress}</p>}
  
        {report.image && (
          <div className="image-preview">
            <p><strong>Uploaded Image:</strong></p>
            <img
              src={`http://localhost:5000/uploads/${report.image}`} // Correct path
              alt="Damage"
              className="report-image"
            />
          </div>
        )}

      </div>
    </div>
  );
  

  
}

export default ReportDetails;
