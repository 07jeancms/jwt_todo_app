import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';

// Services
import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // endpoints which must receive the JWT
        whitelistedDomains: ['localhost:4000'],
        // endpoints which shouldn't receive the JWT
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    })
  ],
  providers: [
    TodoService,
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
