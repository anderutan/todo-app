import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';
import { useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className='flex justify-between items-center'>
      <h1>TODO</h1>
      <button onClick={toggleTheme}>
        {theme ? (
          <img src={sunIcon} alt='Light Theme Toggle Button' />
        ) : (
          <img src={moonIcon} alt='Dark Theme Toggle Button' />
        )}
      </button>
    </div>
  );
};

export default Header;
