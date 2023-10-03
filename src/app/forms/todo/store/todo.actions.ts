import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.model';

export const fetchTodo = createAction('[Todo Component] Fetch Todo');

export const setTodos = createAction(
  '[Todo Component] Set Todos',
  props<{todos: Todo[]}>()
);

export const saveOrUpdateTodo = createAction(
  '[Todo Component] SaveOrUpdate Todo',
  props<{todo: Todo, isUpdate: boolean}>()
);

export const deleteTodo = createAction(
  '[Todo Component] Delete Todo',
  props<{todoId: number}>()
);
