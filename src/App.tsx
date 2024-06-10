import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <h1 className='bg-bg-1 dark:bg-bg-1-d dark:text-white'>testing</h1>
      <button onClick={toggleTheme}>{theme ? 'Dark' : 'White'} toggle</button>
    </>
  );
}

export default App;
