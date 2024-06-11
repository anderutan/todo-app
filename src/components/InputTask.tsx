import { useState, useContext } from 'react';
import { TodoContext } from '../App';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';

const InputTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useContext(TodoContext);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (task && dispatch) {
      dispatch({ type: 'ADD_TODO', id: uuidv4(), task });
    }

    setTask('');
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex px-4 py-3 items-center bg-bg-1 dark:bg-bg-1-d rounded-md mb-4'
    >
      <label className='inline-flex items-center'>
        <span className='w-4 h-4 border border-b-line dark:border-b-line-b rounded-full cursor-pointer'></span>
      </label>
      <input
        type='text'
        value={task}
        onChange={handleChangeInput}
        className='flex-1 p-1 border-none outline-none ml-2 placeholder:text-xs bg-bg-1 dark:bg-bg-1-d dark:text-white focus:border-0 focus:ring-0 md:text-lg md:placeholder:text-sm'
        placeholder='Create a new todo...'
      />
      <button type='submit'>
        <FaPlus className='text-xs text-light-gray hover:text-inactive dark:text-inactive dark:hover:text-light-gray' />
      </button>
    </form>
  );
};

export default InputTask;
