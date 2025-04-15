import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportDamage from './pages/ReportDamage';
import ViewReports from './pages/ViewReports';
import ReportDetails from './pages/ReportDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportDamage />} />
        <Route path="/reports" element={<ViewReports />} />
        <Route path="/reports/:id" element={<ReportDetails />} /> {/* Dynamic route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
