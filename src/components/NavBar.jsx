import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <nav className='flex flex-col sm:flex-row max-w-full bg-[#334155] dark:bg-gray-900 px-4 py-4 text-[#e2e8f0] dark:text-white justify-between items-center'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center gap-2'>
            <Link
              to='/'
              className='text-xl sm:text-2xl font-medium'>
              Home
            </Link>
            <Link
              to='/about'
              className='sm:mt-1'>
              About
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className='mt-2 sm:mt-0 bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-3 py-1 rounded-md text-sm'>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
