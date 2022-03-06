import React, { FunctionComponent } from 'react';

import { Todo } from 'src/contexts/todo';
import { TodoListContainer, TodoContainer } from './styles';

import { TodoStatus } from '../../contexts/todo';

type Props = {
  className?: string;
  todos: Todo[];
  onChangeStatus: (key: string, status: TodoStatus) => void;
  onDelete: (key: string) => void;
};

type TodoProps = Todo & {
  onChangeStatus: (key: string, status: TodoStatus) => void;
  onDelete: (key: string) => void;
};

const TodoElem: FunctionComponent<TodoProps> = ({
  id,
  value,
  status,
  onChangeStatus,
  onDelete,
}) => {
  const handleChangeStatus = (evt) => {
    evt.stopPropagation();
    const newStatus =
      status === TodoStatus.Active ? TodoStatus.Completed : TodoStatus.Active;
    onChangeStatus(id, newStatus);
  };
  const handleDelete = (evt) => {
    evt.stopPropagation();
    onDelete(id);
  };

  return (
    <TodoContainer
      className="notification is-info"
      status={status}
      onClick={handleChangeStatus}
    >
      {value}
      <button className="delete" onClick={handleDelete}></button>
    </TodoContainer>
  );
};

const TodoList: FunctionComponent<Props> = ({
  className,
  todos,
  onChangeStatus,
  onDelete,
}) => {
  return (
    <TodoListContainer className={className}>
      {todos.map((todo) => (
        <TodoElem
          key={todo.id}
          onChangeStatus={onChangeStatus}
          onDelete={onDelete}
          {...todo}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
