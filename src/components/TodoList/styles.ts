import styled from '@emotion/styled';

import { TodoStatus } from '../../contexts/todo';

export const TodoListContainer = styled('div')``;

type TodoContainerProps = {
  status: TodoStatus | undefined;
};

export const TodoContainer = styled.div<TodoContainerProps>`
  cursor: pointer;
  text-decoration: ${({ status }) =>
    status === TodoStatus.Completed ? 'line-through' : 'none'};
`;
