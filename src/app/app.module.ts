import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './forms/todo/todo.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './forms/todo/store/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todoState: todoReducer}, {}),
    BrowserAnimationsModule,
    TodoModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
