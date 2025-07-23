import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth-related localStorage/sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // Navigate to login page
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container container">
        <h2 className="dashboard-header">Doctor Dashboard</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Upcoming Appointments</h5>
              <p>No appointments scheduled for today.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Patient Feedback</h5>
              <p>You have 3 new feedback messages.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card p-4">
              <h5>Patient History</h5>
              <p>Access and manage all patient records.</p>
            </div>
          </div>
        </div>

        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default DoctorDashboard;
