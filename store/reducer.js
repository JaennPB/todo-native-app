import { createReducer, createAction } from '@reduxjs/toolkit';

export const setUsername = createAction('welcome/setUsername');
export const addingToggle = createAction('todo/addingToggle');
export const addTodo = createAction('todo/addTodo');
export const deleteTodo = createAction('todo/deleteTodo');
export const completeTodo = createAction('todo/completeTodo');

const initialState = {
  user: '',
  adding: false,
  todos: [],
  completedTodos: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addingToggle, (state, action) => {
    state.adding = !state.adding;
  });
  builder.addCase(setUsername, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(addTodo, (state, action) => {
    state.todos.push(action.payload);
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.todos = state.todos.filter((_, index) => index !== action.payload);
  });
  builder.addCase(completeTodo, (state, action) => {
    const [completedItem] = state.todos.filter(
      (_, index) => index === action.payload
    );
    state.completedTodos.push(completedItem);
  });
});

export default reducer;
