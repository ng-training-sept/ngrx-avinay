import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as TodoActions from './todo.actions';
import { catchError, EMPTY, switchMap, TimeoutError } from 'rxjs';
import { Todo } from '../todo.model';

@Injectable()
export class TodoEffects {

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) {
  }

  fetchTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.fetchTodo),
    switchMap(() => {
      return this.http.get<Todo[]>(`http://localhost:3000/todos`).pipe(
        switchMap(response => [TodoActions.setTodos({todos: response})]),
        catchError((err: HttpErrorResponse | TimeoutError) => EMPTY)
      );
    })
  ));
}
// this.store.dispatch(TodoActions.setTodos({todos: response}));
