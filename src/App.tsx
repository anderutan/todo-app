import { useReducer, createContext, useState } from 'react';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Header from './components/Header';
import { filterReducer, todoReducer } from './reducer';
import bgMobileLight from './assets/bg-mobile-light.jpg';
import bgMobileDark from './assets/bg-mobile-dark.jpg';
import bgDesktopLight from './assets/bg-desktop-light.jpg';
import bgDesktopDark from './assets/bg-desktop-dark.jpg';
import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
  {
    id: uuidv4(),
    task: 'Jogging',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'meditation',
    complete: false,
  },
  {
    id: uuidv4(),
    task: 'reading',
    complete: false,
  },
];

export const TodoContext = createContext(undefined);

function App() {
  const [theme, setTheme] = useState(false);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filterTodos = todos.filter((todo) => {
    if (filter === 'ALL') {
      return true;
    } else if (filter === 'ACTIVE' && !todo.complete) {
      return true;
    } else if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
  });

  return (
    <main className='relative min-w-screen min-h-screen w-full h-full bg-bg-2 dark:bg-bg-2-d '>
      <div className='absolute -z-0'>
        <img
          src={theme ? bgMobileDark : bgMobileLight}
          alt='Background image'
        />
      </div>
      <section className='px-5 py-10 z-10 relative'>
        <TodoContext.Provider value={dispatchTodos}>
          <Header theme={theme} setTheme={setTheme} />
          <InputTask />
          <TaskList todos={filterTodos} />
          <Filter dispatch={dispatchFilter} filter={filter} />
        </TodoContext.Provider>
      </section>
    </main>
  );
}

export default App;
