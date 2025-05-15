// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const db = require('./config/db');
const reportRoutes = require('./routes/reportRoutes');
const adminRoutes = require('./routes/adminRoutes'); // <-- Import admin routes

const app = express();
const port = 5000;

// CORS setup
const corsOptions = {
  origin: 'http://localhost:3000', // React frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api', reportRoutes);
app.use('/api/admin', adminRoutes); // <-- Mount admin routes

// Server listener
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
