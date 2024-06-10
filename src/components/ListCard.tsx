import { useContext } from 'react';
import { TodoContext } from '../App';

interface todo {
  id: string;
  task: string;
  complete: boolean;
}

const ListCard = ({ todo }: todo) => {
  const dispatch = useContext(TodoContext);
  const handleChangeCheckbox = () => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TODO', id: todo.id });
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={todo.complete}
        onChange={handleChangeCheckbox}
      />
      <label>{todo.task}</label>
      <button onClick={handleRemove}>x</button>
    </li>
  );
};

export default ListCard;
