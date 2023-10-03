import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: TodoComponent}
];

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todoState', todoReducer),
    EffectsModule.forFeature(TodoEffects)
  ]
})
export class TodoModule { }
