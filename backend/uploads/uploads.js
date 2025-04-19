const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer storage and file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Serve static files from the uploads folder
app.use('/uploads', express.static(uploadDir));

// Endpoint to handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Send response with the path to the uploaded file
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
