import { createReducer, createAction } from '@reduxjs/toolkit';

export const setUsername = createAction('welcome/setUsername');
export const addingToggle = createAction('todo/addingToggle');
export const addTodo = createAction('todo/addTodo');
export const deleteTodo = createAction('todo/deleteTodo');
export const completeTodo = createAction('todo/completeTodo');
export const incompleteTodo = createAction('todo/incompleteTodo');

const initialState = {
  user: '',
  adding: false,
  todos: [],
  completedTodos: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsername, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(addingToggle, (state) => {
    state.adding = !state.adding;
  });
  builder.addCase(addTodo, (state, action) => {
    state.todos.unshift(action.payload);
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.todos = state.todos.filter((item) => item !== action.payload);
    state.completedTodos = state.completedTodos.filter(
      (item) => item !== action.payload
    );
  });
  builder.addCase(completeTodo, (state, action) => {
    const completedItem = state.todos.find((item) => item === action.payload);
    state.completedTodos.unshift(completedItem);
    state.todos = state.todos.filter((item) => item !== action.payload);
  });
  builder.addCase(incompleteTodo, (state, action) => {
    const item = state.completedTodos.find((item) => item === action.payload);
    state.todos.push(item);
    state.completedTodos = state.completedTodos.filter(
      (item) => item !== action.payload
    );
  });
});

export default reducer;
