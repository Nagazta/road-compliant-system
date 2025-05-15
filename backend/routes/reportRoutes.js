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

router.post('/report', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { location, description, date } = req.body;
  const status = 'Pending';
  const image = req.file ? req.file.filename : null; // Store only filename in the database

  console.log('📷 Uploaded file:', req.file);

  const sql = `
    INSERT INTO road_reports (location, description, status, date, image)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [location, description, status, date, image], (err, result) => {
    if (err) {
      console.error(' Error inserting report:', err);
      return res.status(500).json({ error: 'Failed to insert report' });
    }
    res.status(201).json({ success: true, id: result.insertId });
  });
});


// ✅ GET /api/report - Fetch all reports
router.get('/report', (req, res) => {
  const sql = `SELECT * FROM road_reports ORDER BY date DESC`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching reports:', err);
      return res.status(500).json({ error: 'Failed to fetch reports' });
    }
    res.json(results);
  });
});

// Fetch report by ID
router.get('/report/:id', (req, res) => {
  const reportId = req.params.id;

  const sql = `SELECT * FROM road_reports WHERE id = ?`;
  db.query(sql, [reportId], (err, results) => {
    if (err) {
      console.error('Error fetching report by ID:', err);
      return res.status(500).json({ error: 'Failed to fetch report' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Report not found' });
    }

    res.json(results[0]); // Return the single report object
  });
});
// In your reportRoutes.js or similar
router.get('/reports/count', async (req, res) => {
  try {
    const [result] = await db.query('SELECT COUNT(*) AS count FROM reports');
    res.json({ count: result[0].count });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reports count' });
  }
});





module.exports = router;
