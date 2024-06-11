import { useContext } from 'react';
import { TodoContext } from '../App';
import checkIcon from '../assets/icon-check.svg';
import crossIcon from '../assets/icon-cross.svg';
import type { Todo } from '../util/reducer';

interface Props {
  todo: Todo;
}

const ListCard = ({ todo }: Props) => {
  const dispatch = useContext(TodoContext);
  const handleChangeCheckbox = () => {
    dispatch &&
      dispatch({
        type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
        id: todo.id,
      });
  };

  const handleRemove = () => {
    dispatch && dispatch({ type: 'REMOVE_TODO', id: todo.id });
  };

  return (
    <li className=' flex px-4 py-3 items-center bg-bg-1 dark:bg-bg-1-d border-b border-b-line dark:border-b-b-line-b '>
      <span className='inline-flex items-center justify-center '>
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={handleChangeCheckbox}
          className={`relative w-4 h-4 p-2 border border-b-line dark:border-b-line-b bg-bg-1 dark:bg-bg-1-d rounded-full cursor-pointer hover:ring-2 ${
            todo.complete &&
            'checked:bg-gradient-to-r from-cyan-300 to-purple-500'
          }`}
        />
        {todo.complete && (
          <img
            src={checkIcon}
            alt='Checked Icon'
            className='absolute w-2 h-2'
          />
        )}
      </span>

      <label
        className={`flex-1 p-1 border-none outline-none ml-2 text-xs bg-bg-1 dark:bg-bg-1-d dark:text-white cursor-pointer md:text-base ${
          todo.complete && 'line-through text-task-done'
        }`}
      >
        {todo.task}
      </label>
      <button onClick={handleRemove}>
        <img
          src={crossIcon}
          alt='Remove todo item button'
          className='h-3 w-3'
        />
      </button>
    </li>
  );
};

export default ListCard;
