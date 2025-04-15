const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./config/db');
const reportRoutes = require('./routes/reportRoutes'); // ✅ Make sure this path is correct

const app = express();
const port = 5000;

// Middleware
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // ✅ Serve uploaded files if needed

// Mount all routes under /api
app.use('/api', reportRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
