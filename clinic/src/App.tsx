import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ClinicNavbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './components/contact';
import DoctorDashboard from './pages/DoctorDashboard';
import CustomerDashboard from './pages/CustomerDashboard';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <ClinicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
