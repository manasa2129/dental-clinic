import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Navbar from "../components/Navbar";

const CustomerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear user session data
    localStorage.removeItem("user"); // Replace 'user' if you're using a different key
    sessionStorage.clear(); // Optional: clear all session storage
    navigate("/"); // ✅ Redirect to login
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container container">
        <h2 className="dashboard-header">Customer Dashboard</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Your Appointments</h5>
              <p>You have 1 appointment booked with Dr. Priya Mehta.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Medical Records</h5>
              <p>Upload and manage your prescriptions securely.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Upcoming Notifications</h5>
              <p>Receive SMS/email updates about your next appointment.</p>
            </div>
          </div>
        </div>

        {/* ✅ Log Out Button */}
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default CustomerDashboard;
