const db = require('../config/db');

const getAllReports = (callback) => {
  db.query('SELECT * FROM road_reports', callback);
};

const getReportById = (id, callback) => {
  db.query('SELECT * FROM road_reports WHERE id = ?', [id], callback);
};

const createReport = (data, callback) => {
  db.query('INSERT INTO road_reports SET ?', data, callback);
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
};
