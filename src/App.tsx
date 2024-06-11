import {
  useReducer,
  createContext,
  useState,
  Dispatch,
  useEffect,
} from 'react';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Header from './components/Header';
import { filterReducer, todoReducer } from './util/reducer';
import bgMobileLight from './assets/bg-mobile-light.jpg';
import bgMobileDark from './assets/bg-mobile-dark.jpg';
import bgDesktopLight from './assets/bg-desktop-light.jpg';
import bgDesktopDark from './assets/bg-desktop-dark.jpg';
import useWindowDimensions from './util/useWindowDimensions';
import type { Todo, TodoAction } from './util/reducer';

const initialTodos: Todo[] = [];

const loadTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : initialTodos;
};

export const TodoContext = createContext<Dispatch<TodoAction> | undefined>(
  undefined
);

function App() {
  const [theme, setTheme] = useState(false);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, loadTodos());
  const { width } = useWindowDimensions();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filterTodos = todos.filter((todo: Todo) => {
    if (filter === 'ALL') {
      return true;
    } else if (filter === 'ACTIVE' && !todo.complete) {
      return true;
    } else if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
  });

  return (
    <main className='relative min-w-screen min-h-screen w-full h-full bg-bg-2 dark:bg-bg-2-d max-w-[1440px] mx-auto'>
      <div className='absolute -z-0'>
        {width > 375 ? (
          <img
            src={theme ? bgDesktopDark : bgDesktopLight}
            alt='Background image'
          />
        ) : (
          <img
            src={theme ? bgMobileDark : bgMobileLight}
            alt='Background image'
            className='w-full'
          />
        )}
      </div>
      <section className='px-5 py-10 z-10 relative max-w-[640px] mx-auto'>
        <TodoContext.Provider value={dispatchTodos}>
          <Header theme={theme} setTheme={setTheme} />
          <InputTask />
          <TaskList todos={filterTodos} />
          <Filter dispatch={dispatchFilter} filter={filter} />
          {width > 1280 && (
            <section className='flex justify-center my-10 text-inactive text-sm'>
              <p>Drag and drop to reorder list</p>
            </section>
          )}
        </TodoContext.Provider>
      </section>
    </main>
  );
}

export default App;
