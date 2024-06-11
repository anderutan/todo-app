export interface Todo {
  id: string;
  task: string;
  complete: boolean;
}

export type TodoAction =
  | { type: 'DO_TODO'; id: string }
  | { type: 'UNDO_TODO'; id: string }
  | { type: 'ADD_TODO'; task: string; id: string }
  | { type: 'REMOVE_TODO'; id: string }
  | { type: 'REMOVE_COMPLETED' }
  | { type: 'REORDER_TODOS'; todos: Todo[] };

export type FilterAction =
  | { type: 'SHOW_ALL' }
  | { type: 'SHOW_ACTIVE' }
  | { type: 'SHOW_COMPLETE' };

export const filterReducer = (state: string, action: FilterAction) => {
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

export const todoReducer = (state: Todo[], action: TodoAction) => {
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
