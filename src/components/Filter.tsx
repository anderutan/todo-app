import React from 'react';

type Props = {};

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
    <div className='flex gap-4 justify-center pt-4 py-3 bg-bg-1 dark:bg-bg-1-d text-xs rounded-md'>
      <button
        type='button'
        onClick={handleShowAll}
        className={filter === 'ALL' ? 'text-active font-bold' : 'text-inactive'}
      >
        All
      </button>
      <button
        type='button'
        onClick={handleShowActive}
        className={
          filter === 'ACTIVE' ? 'text-active font-bold' : 'text-inactive'
        }
      >
        Active
      </button>
      <button
        type='button'
        onClick={handleShowComplete}
        className={
          filter === 'COMPLETE' ? 'text-active font-bold' : 'text-inactive'
        }
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
