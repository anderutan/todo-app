export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_ACTIVE':
      return 'ACTIVE';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    default:
      throw new Error();
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case 'ADD_TODO':
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'REMOVE_COMPLETED':
      return state.filter((todo) => !todo.complete);
    case 'REORDER_TODOS':
      return action.todos;
    default:
      throw new Error();
  }
};
