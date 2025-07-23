import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'doctor' | 'customer'| ''>(''); 
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const ipResponse = await axios.get('https://ipapi.co/json/');
      const location = {
        ip: ipResponse.data.ip,
        city: ipResponse.data.city,
        region: ipResponse.data.region,
        country: ipResponse.data.country_name,
      };

      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role,
        location,
      });

      if (response.status === 200) {
        alert('Login successful!');

        // You can trust the response or use the selected role to redirect
        if (role === 'doctor') {
          navigate('/DoctorDashboard');
        } else {
          navigate('/CustomerDashboard');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials and role.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to SmileCare</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    className="auth-input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <button
    type="button"
    className="toggle-password-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? '🙈' : '👁️'}
  </button>
</div>

          <select
            className="auth-input"
            value={role}
            onChange={(e) => setRole(e.target.value as 'doctor' | 'customer')}
            required
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="customer">Customer</option>
          </select>

          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
