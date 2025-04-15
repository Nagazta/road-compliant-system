const db = require('../config/db');

// Get all reports
exports.getAllReports = (callback) => {
  const query = 'SELECT * FROM road_reports';
  db.query(query, callback);
};

// Get a specific report by ID
exports.getReportById = (id, callback) => {
  const query = 'SELECT * FROM road_reports WHERE id = ?';
  db.query(query, [id], callback);
};

// Create a new report
exports.createReport = (newReport, callback) => {
  const { location, description, status, date, image } = newReport;
  const query = `
    INSERT INTO road_reports (location, description, status, date, image)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [location, description, status, date, image], callback);
};
