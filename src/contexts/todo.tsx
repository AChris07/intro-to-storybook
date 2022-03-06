import type { Context, Dispatch, FunctionComponent, ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { nanoid } from 'nanoid';

export enum TodoStatus {
  Active,
  Completed,
}

export type Todo = {
  id: string;
  value?: string;
  status?: TodoStatus;
};

export interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

enum TodoActionType {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface TodoAction {
  type: TodoActionType;
  payload: Todo;
}

export const addTodo = (value: string): TodoAction => ({
  type: TodoActionType.ADD_TODO,
  payload: { id: nanoid(), value, status: TodoStatus.Active },
});

export const editTodoValue = (id: string, value: string): TodoAction => ({
  type: TodoActionType.EDIT_TODO,
  payload: { id, value },
});

export const changeTodoStatus = (id: string, status: TodoStatus): TodoAction => ({
  type: TodoActionType.EDIT_TODO,
  payload: { id, status },
});

export const deleteTodo = (id: string): TodoAction => ({
  type: TodoActionType.DELETE_TODO,
  payload: { id },
});

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TodoActionType.EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload };
          }
          return todo;
        }),
      };
    case TodoActionType.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

const TodoContext: Context<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}> = createContext({
  state: initialState,
  /* tslint:disable:no-empty */
  dispatch: (_: TodoAction) => {},
});

type Props = {
  children: ReactNode;
};

export const TodoProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
  );
};

export function useTodoContext() {
  return useContext(TodoContext);
}
