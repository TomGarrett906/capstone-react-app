import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

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
    <button className='darkModeButton' onClick={toggleDarkMode}>
      {isDarkMode ? <FiSun /> : <FiMoon />}
      {isDarkMode ? '' : ''}
    </button>
  );
};

export default DarkMode;