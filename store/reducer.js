import { createReducer, createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todo/addTodo');
export const setUsername = createAction('welcome/setUsername');

const initialState = {
  user: '',
  todos: ['hi'],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsername, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(addTodo, (state, action) => {
    state.todos.push(action.payload);
  });
});

export default reducer;
