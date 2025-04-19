const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./config/db');
const reportRoutes = require('./routes/reportRoutes');
const path = require('path'); // <-- Add this line

const app = express();
const port = 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount all routes under /api
app.use('/api', reportRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
