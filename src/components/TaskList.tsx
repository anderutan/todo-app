import ListCard from './ListCard';
import { TodoContext } from '../App';
import { useContext } from 'react';

interface todo {
  id: string;
  task: string;
  complete: boolean;
}

interface Props {
  todos: todo[];
}

const TaskList = ({ todos }: Props) => {
  const dispatch = useContext(TodoContext);
  const handleClearBtn = () => {
    dispatch({ type: 'REMOVE_COMPLETED' });
  };
  return (
    <section className='rounded-md overflow-hidden bg-bg-1 dark:bg-bg-1-d mb-4'>
      <ul>
        {todos.map((todo) => (
          <ListCard todo={todo} key={todo.id} />
        ))}
        <div className='text-xs text-light-gray flex justify-between p-4'>
          <p>{todos.filter((todo) => !todo.complete).length} items left</p>
          <button type='button' onClick={handleClearBtn}>
            Clear Completed
          </button>
        </div>
      </ul>
    </section>
  );
};

export default TaskList;
