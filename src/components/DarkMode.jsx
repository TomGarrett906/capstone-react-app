import { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;

    if (isDarkMode) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  };

  return (
    <button className="button" onClick={toggleDarkMode}>
      {isDarkMode ? 'Darker Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;
