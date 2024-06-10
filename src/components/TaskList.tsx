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

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const draggedIndex = e.dataTransfer.getData('index');
    const newTodos = Array.from(todos);
    const [draggedTodo] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(newIndex, 0, draggedTodo);
    dispatch({ type: 'REORDER_TODOS', todos: newTodos });
  };

  return (
    <section className='rounded-md overflow-hidden bg-bg-1 dark:bg-bg-1-d mb-4'>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <ListCard todo={todo} />
          </li>
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
