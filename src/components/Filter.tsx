import React from 'react';

type Props = {};

const Filter = ({ dispatch }: Props) => {
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
    <div>
      <button type='button' onClick={handleShowAll}>
        All
      </button>
      <button type='button' onClick={handleShowActive}>
        Active
      </button>
      <button type='button' onClick={handleShowComplete}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
