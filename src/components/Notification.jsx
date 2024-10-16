import React, { useEffect, useState } from 'react';

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      // Automatically hide the notification after 3 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-80 p-4 bg-primary shadow-md rounded-md z-50">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700">{message}</p>
        <button onClick={() => {
          setVisible(false);
          onClose();
        }} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
