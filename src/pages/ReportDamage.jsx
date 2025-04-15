import React, { useState } from 'react';
import '../styles/ReportDamage.css';

function ReportDamage() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Later: Send this to backend or API
    alert('Report submitted!');
  };

  return (
    <div className="report-container">
      <h2>📍 Report Road Damage</h2>
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
