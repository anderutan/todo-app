import { Dispatch } from 'react';
import type { FilterAction } from '../util/reducer';

type Props = {
  dispatch: Dispatch<FilterAction>;
  filter: string;
};

const Filter = ({ dispatch, filter }: Props) => {
  const handleShowAll = () => {
    dispatch({ type: 'SHOW_ALL' });
  };
  const handleShowActive = () => {
    dispatch({ type: 'SHOW_ACTIVE' });
  };
  const handleShowComplete = () => {
    dispatch({ type: 'SHOW_COMPLETE' });
  };

  return (
    <div className='flex gap-4 justify-center pt-4 py-3 bg-bg-1 dark:bg-bg-1-d text-xs rounded-md shadow-xl md:text-sm'>
      <button
        type='button'
        onClick={handleShowAll}
        className={
          filter === 'ALL'
            ? 'text-active font-bold'
            : 'text-light-gray hover:text-inactive dark:text-inactive dark:hover:text-light-gray'
        }
      >
        All
      </button>
      <button
        type='button'
        onClick={handleShowActive}
        className={
          filter === 'ACTIVE'
            ? 'text-active font-bold'
            : 'text-light-gray hover:text-inactive dark:text-inactive dark:hover:text-light-gray'
        }
      >
        Active
      </button>
      <button
        type='button'
        onClick={handleShowComplete}
        className={
          filter === 'COMPLETE'
            ? 'text-active font-bold'
            : 'text-light-gray hover:text-inactive dark:text-inactive dark:hover:text-light-gray'
        }
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
