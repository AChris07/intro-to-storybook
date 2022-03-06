import styled from '@emotion/styled';

import { TodoStatus } from '../../contexts/todo';

export const TodoListContainer = styled('div')``;

export const TodoContainer = styled('div')`
  cursor: pointer;
  text-decoration: ${({ status }) =>
    status === TodoStatus.Completed ? 'line-through' : 'none'};
`;
