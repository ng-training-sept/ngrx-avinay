import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todoState');

export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state.todos);
export const selectError = createSelector(selectTodoState, (state: TodoState) => state.error);
export const selectLoading = createSelector(selectTodoState, (state: TodoState) => state.loading);
export const selectNested211 = createSelector(selectTodoState, (state: TodoState) => state.nested?.nested2.nested211);

