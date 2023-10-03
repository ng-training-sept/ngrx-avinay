import { Todo } from '../todo.model';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  loading: boolean;
  nested?: {
    nested1: string;
    nested2: {
      nested211: string;
    }
  }
}

export const todoInitialState: TodoState = {
  todos: [
      {id: 1, description: 'Buy milk', done: true},
      {id: 2, description: 'Learn RxJS', done: false},
      {id: 3, description: 'Learn Angular', done: true},
      {id: 4, description: 'Learn NgRx', done: false},
      {id: 5, description: 'Learn Angular animation', done: true}
  ],
  error: null,
  loading: false
};

export const todoReducer = createReducer(
  todoInitialState,
  on(TodoActions.setTodos, (state, payload) => {
    const todos = payload.todos;
    return {...state, todos};
  }),
  on(TodoActions.saveOrUpdateTodo, (state, payload) => {
    const todos = payload.isUpdate
      ? state.todos.map(todo => todo.id === payload.todo.id ? {...todo, done: !todo.done} : todo)
      : [...state.todos, payload.todo];
    return {...state, todos};
  }),
  on(TodoActions.deleteTodo, (state, payload) => {
    const todo = state.todos.find(todo => todo.id === payload.todoId);
    if (todo) {
      const stateCopy = structuredClone(state);
      const index = stateCopy.todos.findIndex(todo => todo.id === payload.todoId);
      stateCopy.todos.splice(index, 1)
      return {...state, todos: stateCopy.todos}
    }
    return state;
  })
);
