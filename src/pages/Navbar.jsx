import React, { useEffect, useState } from 'react';
import { TbListTree } from 'react-icons/tb';
import { FaTimes, FaUserCircle, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { get } from '../Requests/Requests'; // Import the GET function from request.js

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null); // Local state to store user data
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('Gold_token');
    if (token) {
      const fetchUserData = async () => {
        try {
          const userData = await get('/user'); // Call the GET request with token as a parameter
          console.log(userData)
          setUser(userData.body); // Set user data in local state
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };

      fetchUserData(); // Invoke the function
    }
  }, []);

  // Toggle sidebar
  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('Gold_token'); // Clear token
    setUser(null); // Clear user state
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center">
          {!showSidebar && (
            <TbListTree
              size={30}
              className="cursor-pointer"
              onClick={handleToggleSidebar}
            />
          )}
          <img
            src="assets/images/logo/logo.png"
            className="w-14 h-14 rounded-full ml-10"
            alt="Logo"
          />
          <h1 className="text-lg md:text-2xl font-semibold ml-2">Gold MarketPlace</h1>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-2 border-2 border-primary rounded-l-full focus:outline-none"
          />
          <button className="px-4 py-2 bg-primary rounded-r-full hover:bg-gray-400">
            <FaSearch size={30} />
          </button>
        </div>

        <div className="flex gap-4">
          {user ? (
            <>
              <span className="text-lg font-semibold">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-lg font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-lg font-semibold">Login</Link>
              <Link to="/signup" className="text-lg font-semibold">Signup</Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white p-6 z-20 transform duration-700 ease-in-out 
          ${showSidebar ? 'translate-x-0 w-[75%] md:w-[20%]' : '-translate-x-full'}`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <FaTimes
            size={24}
            className="cursor-pointer hover:text-gray-400"
            onClick={handleToggleSidebar}
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-8">
          <FaUserCircle size={50} />
          <div>
            <p className="text-lg font-medium">{user?.name || 'Guest'}</p>
            <p className="text-sm text-gray-400">{user ? 'Gold Seller' : 'Visitor'}</p>
          </div>
        </div>
      </div>

      {/* Overlay (to close sidebar) */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
