import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import ReportDamage from './pages/ReportDamage';
import Navbar from './components/Navbar';
import AdminNavbar from './admin/AdminNavbar';
import Footer from './components/Footer';

// Admin
import ViewReports from './admin/ViewReports';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ReportDetails from './admin/ReportDetails';

function AppWrapper() {
  const location = useLocation();

  // Initialize login state based on localStorage token
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return !!localStorage.getItem('adminToken');
  });

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute && isAdminLoggedIn ? (
        <AdminNavbar onLogout={setIsAdminLoggedIn} />
      ) : (
        <Navbar />
      )}

      <Routes>
        {/* User Side */}
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportDamage />} />

        {/* Admin Side */}
        <Route
          path="/admin/login"
          element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />}
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<ViewReports />} />
        <Route path="/admin/reports/:id" element={<ReportDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
