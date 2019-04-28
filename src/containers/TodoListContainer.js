import React, { useCallback } from 'react';
import { useRedux } from 'react-redux';
import { changeInput, insert, toggleCheck, remove } from '../modules/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = () => {
  const [
    { input, todos },
    [onChangeInput, onInsert, onToggle, onRemove]
  ] = useRedux(
    state => ({
      input: state.todos.input,
      todos: state.todos.todos
    }),
    [changeInput, insert, toggleCheck, remove]
  );

  const onChange = useCallback(
    e => {
      onChangeInput(e.target.value);
    },
    [onChangeInput]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(input);
      onChangeInput('');
    },
    [input, onChangeInput, onInsert]
  );

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;