import type { ReactElement } from 'react';
import { useState } from 'react';
import Head from 'next/head';

import BasicLayout from 'src/layouts/Basic';
import InputText from 'src/components/InputText';
import TodoList from 'src/components/TodoList';
import { NextPageWithLayout } from 'src/types/pages';

import {
  TodoProvider,
  TodoStatus,
  useTodoContext,
  addTodo,
  changeTodoStatus,
  deleteTodo,
} from 'src/contexts/todo';

const Todo: NextPageWithLayout = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const { state, dispatch } = useTodoContext();

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleChangeStatus = (id: string, status: TodoStatus) =>
    dispatch(changeTodoStatus(id, status));
  const handleDeleteTodo = (id: string) => dispatch(deleteTodo(id));

  return (
    <main className="container mb-6">
      <h1 className="is-size-3 mb-6 has-text-centered">To-Do List</h1>

      <InputText
        className="is-large is-rounded mb-6"
        onChange={setNewTodo}
        onSubmit={handleAddTodo}
        placeholder="What needs to be done?"
        value={newTodo}
      />

      <TodoList
        todos={state.todoList}
        onChangeStatus={handleChangeStatus}
        onDelete={handleDeleteTodo}
      />
    </main>
  );
};

Todo.getLayout = function getLayout(page: ReactElement) {
  return (
    <TodoProvider>
      <BasicLayout>
        <Head>
          <title>To-Do List</title>
        </Head>
        {page}
      </BasicLayout>
    </TodoProvider>
  );
};

export default Todo;
