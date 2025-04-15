const express = require('express');
const router = express.Router();
const db = require('../config/db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// ✅ Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ✅ File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ✅ POST /api/report - Create new report
router.post('/report', upload.single('image'), (req, res) => {
  const { location, description, date } = req.body;
  const status = 'Pending';
  const image = req.file ? req.file.path.replace(/\\/g, '/') : null;

  console.log('📷 Uploaded file:', req.file);

  const sql = `
    INSERT INTO road_reports (location, description, status, date, image)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [location, description, status, date, image], (err, result) => {
    if (err) {
      console.error('❌ Error inserting report:', err);
      return res.status(500).json({ error: 'Failed to insert report' });
    }
    res.status(201).json({ success: true, id: result.insertId });
  });
});

// GET routes...
