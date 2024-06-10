import { useState, useContext } from 'react';
import { TodoContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

const InputTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useContext(TodoContext);

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (task) {
      dispatch({ type: 'ADD_TODO', id: uuidv4(), task });
    }

    setTask('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={task}
        onChange={handleChangeInput}
        className='w-full border shadow-lg px-3 py-1'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default InputTask;
