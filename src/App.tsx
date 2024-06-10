import { useReducer, createContext } from 'react';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Header from './components/Header';
import { filterReducer, todoReducer } from './reducer';
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
    <main className=''>
      <section className='px-5 py-8'>
        <TodoContext.Provider value={dispatchTodos}>
          <Header />
          <InputTask />
          <TaskList todos={filterTodos} />
          <Filter dispatch={dispatchFilter} />
        </TodoContext.Provider>
      </section>
    </main>
  );
}

export default App;
