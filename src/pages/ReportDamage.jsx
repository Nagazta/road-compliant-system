import React, { useState } from 'react';
import '../styles/ReportDamage.css';

function ReportDamage() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    image: null,
    date: new Date().toISOString().split('T')[0],  // Automatically set the date to today
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,  // Handle file upload
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('location', formData.location);  // Append location
    form.append('description', formData.description);  // Append description
    form.append('status', 'Pending');  // Set status to "Pending" by default
    form.append('date', formData.date);  // Append date
    if (formData.image) {
      form.append('image', formData.image);  // Append image file if available
    }
  
    // Log the FormData to check if it is being created correctly
    console.log('Form Data:', form);
  
    // Send data to the backend API
    fetch('http://localhost:5000/api/report', {
      method: 'POST',
      body: form,  // Send FormData as the body
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Report submitted:', data);
        alert('Report submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit report!');
      });
  };

  return (
    <div className="report-container">
      <h2>Report Road Damage</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Upload Photo (optional):
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportDamage;
