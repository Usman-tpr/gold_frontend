import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import {post} from '../Requests/Requests'; // Import your request.js file
import Notification from '../components/Notification';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [notificationMessage, setNotificationMessage] = useState('');
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const endpoint = '/user/register'; // Your signup endpoint

    try {
      const response = await post(endpoint, formData); // Use your request.js for API call
      console.log(response);

      if (response?.token) {
        localStorage.setItem("Gold_token", response.token);
        setSuccessMessage('Signup successful!');
        setNotificationMessage('Signup successful!');
     navigate("/")
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const clearNotification = () => {
    setNotificationMessage('');
  };

  return (
    <>
             <Notification message={notificationMessage} onClose={clearNotification} />


      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Location Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your location"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full p-2 rounded-md bg-blue-600 text-white font-semibold ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Error and Success Messages */}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
