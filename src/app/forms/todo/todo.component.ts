import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { deleteTodo, fetchTodo, saveOrUpdateTodo } from './store/todo.actions';
import { selectTodos } from './store/todo.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  private readonly store = inject(Store);
  private subscription!: Subscription;

  todos: Todo[] = [];
  todoDescriptionFormControl = new FormControl('', [Validators.required]);
  todoIdFormControl = new FormControl(null, [Validators.required]);

  ngOnInit(): void {
    this.store.dispatch(fetchTodo());
    // this.store.dispatch(fetchTodo());
    this.subscription = this.store.pipe(
      select(selectTodos)
    ).subscribe(todos => this.todos = todos);
  }

  undoOrCompleteTodo(item: Todo) {
    // this.todos = this.todos.map(todo => todo.id === item.id ? {...todo, done: !todo.done} : todo);
    // const todo: Todo = {...item, done: !item.done};
    this.store.dispatch(saveOrUpdateTodo({todo: item, isUpdate: true}));
  }

  deleteTodo(todoId: number) {
    const todo = this.todos.find(todo => todo.id === todoId);
    // if (todo) {
    //   this.todos.splice(this.todos.indexOf(todo), 1);
    // }
    this.store.dispatch(deleteTodo({todoId}))
  }

  addTodo(): void {
    if (this.todoIdFormControl.value
      && this.todoIdFormControl.value >= 0
      && !this.todos.find(t => t.id === this.todoIdFormControl.value)) {
      const todo: Todo = {
        id: this.todoIdFormControl.value,
        description: this.todoDescriptionFormControl.value ?? '',
        done: false
      }
      // this.todos.push(todo);
      this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: false}));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
