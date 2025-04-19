const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'wildteach123', 
  database: 'road_reports'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to DB:', err);
    return;
  }
  console.log('✅ MySQL connected!');
});

module.exports = db;
