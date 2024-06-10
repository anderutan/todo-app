import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';

type Props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ theme, setTheme }: Props) => {
  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className='flex justify-between items-center mb-5'>
      <h1 className='font-bold text-white text-2xl tracking-[0.3em]'>TODO</h1>
      <button onClick={toggleTheme}>
        {theme ? (
          <img src={sunIcon} alt='Light Theme Toggle Button' />
        ) : (
          <img src={moonIcon} alt='Dark Theme Toggle Button' />
        )}
      </button>
    </header>
  );
};

export default Header;
