import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Test = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="p-2 m-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div className="p-10 text-black dark:text-white">
        <h1 className="text-3xl">Welcome to the Gold Marketplace!</h1>
      </div>
    </div>
  );
};

export default Test;
