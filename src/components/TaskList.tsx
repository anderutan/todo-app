import ListCard from './ListCard';
import { TodoContext } from '../App';
import { useContext } from 'react';
import type { Todo } from '../util/reducer';
interface Props {
  todos: Todo[];
}

const TaskList = ({ todos }: Props) => {
  const dispatch = useContext(TodoContext);

  const handleClearBtn = () => {
    dispatch && dispatch({ type: 'REMOVE_COMPLETED' });
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newIndex: number) => {
    const draggedIndex = parseInt(e.dataTransfer.getData('index'));
    const newTodos = Array.from(todos);
    const [draggedTodo] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(newIndex, 0, draggedTodo);
    dispatch && dispatch({ type: 'REORDER_TODOS', todos: newTodos });
  };

  return (
    <section className='rounded-md overflow-hidden bg-bg-1 dark:bg-bg-1-d mb-4 shadow-xl'>
      <ul>
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <ListCard todo={todo} />
          </div>
        ))}
        <div className='text-xs text-light-gray dark:text-inactive flex justify-between p-4 md:text-sm'>
          <p>{todos.filter((todo) => !todo.complete).length} items left</p>
          <button
            type='button'
            onClick={handleClearBtn}
            className=' hover:text-inactive dark:hover:text-light-gray'
          >
            Clear Completed
          </button>
        </div>
      </ul>
    </section>
  );
};

export default TaskList;
