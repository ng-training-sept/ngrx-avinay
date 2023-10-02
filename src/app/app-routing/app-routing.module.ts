import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from '../forms/todo/todo.component';

const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}