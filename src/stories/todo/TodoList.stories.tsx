import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoList from '../../components/TodoList';
import { Todo, TodoStatus } from '../../contexts/todo';

export default {
  title: 'Todo/TodoList',
  component: TodoList,
  argTypes: {
    onChangeStatus: { action: 'clicked' },
    onDelete: { action: 'clicked' },
  },
} as ComponentMeta<typeof TodoList>;

const generateMockTodos = (amount: number, completedItems: number[] = []): Todo[] =>
  Array.from(
    { length: amount },
    (_, i): Todo => ({
      id: `mock-id-${i + 1}`,
      value: `To-Do Item N. ${i + 1}`,
      status: completedItems.includes(i) ? TodoStatus.Completed : TodoStatus.Active,
    })
  );

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};

export const WithActiveContent = Template.bind({});
WithActiveContent.args = {
  todos: generateMockTodos(3),
};

export const AfterCompletingItems = Template.bind({});
AfterCompletingItems.args = {
  todos: generateMockTodos(4, [1, 3]),
};
