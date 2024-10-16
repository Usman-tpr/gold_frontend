import React, { useState } from 'react';
import { TbListTree } from "react-icons/tb";
import { FaTimes, FaUserCircle, FaChartLine, FaSearch, FaBox, FaCogs, FaMoneyBillWave, FaTrash } from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center">
          {
            !showSidebar
            &&
            <TbListTree
              size={30}
              className="cursor-pointer"
              onClick={handleToggleSidebar}
            />
          }
          <img
            src="assets/images/logo/logo.png"
            className="w-14 h-14 rounded-full ml-10"
            alt="Logo"
          />
          <h1 className="text-lg md:text-2xl font-semibold ml-2">Gold MarketPlace</h1>
        </div>

        <div className='flex items-center'>
        <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-2 border-2 border-primary rounded-l-full focus:outline-none"
          />
          <button className="px-4 py-2 bg-primary rounded-r-full hover:bg-gray-400">
            <FaSearch size={30}/>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white p-6 z-20 transform duration-700 ease-in-out 
          ${showSidebar ? "translate-x-0 w-[75%] md:w-[20%]" : "-translate-x-full"}`}
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
            <p className="text-lg font-medium">Usman Ali</p>
            <p className="text-sm text-gray-400">Gold Seller</p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
            <FaChartLine />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
            <FaBox />
            <span>Manage Products</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
            <FaCogs />
            <span>Update Products</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
            <FaMoneyBillWave />
            <span>Total Revenue</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
            <FaTrash />
            <span>Delete Account</span>
          </li>
        </ul>
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
