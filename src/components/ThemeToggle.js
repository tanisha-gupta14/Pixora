import { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ setIsDarkMode }) => {
    const toggleTheme = () => {
      setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        document.documentElement.classList.toggle('dark', newMode);
        return newMode;
      });
    };

  

  return (
    <button className="theme-toggle" onClick={toggleTheme}>Change Theme</button>
  );
};

export default ThemeToggle;