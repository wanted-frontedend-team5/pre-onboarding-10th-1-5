/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import LogoutButton from '../../components/todo/LogoutButton';
import TodoInput from '../../components/todo/TodoInput';
import TodoList from '../../components/todo/TodoList';
import useGetTodo from '../../hooks/useGetTodo';

export default function Todo() {
  const [isLoading, todos, getTodos] = useGetTodo();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <main className="bg-pink-200 flex flex-col place-items-center container w-96 px-6 py-6 rounded-xl">
      <header className="flex flex-row gap-3">
        <h2>Todo List</h2>
        <LogoutButton />
      </header>
      <section>
        <TodoInput getTodos={getTodos} />
        <TodoList todos={todos} isLoading={isLoading} getTodos={getTodos} />
      </section>
    </main>
  );
}
