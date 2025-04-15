import React from 'react';
import '../styles/Footer.css'; // Adjust if your styles folder is elsewhere

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Road Complaint System. All rights reserved.</p>
      <p>🚧 Built for safer roads 🚧</p>
    </footer>
  );
}

export default Footer;
