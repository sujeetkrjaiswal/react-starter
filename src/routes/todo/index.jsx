import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const TodoApp = () => (
  <section className="container">
    <Header />
    <AddTodo />
    <Todos />
  </section>
);

export default TodoApp;
