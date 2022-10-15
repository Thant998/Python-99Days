import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoComponent } from './todo/todo.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginwithpictureComponent } from './loginwithpicture/loginwithpicture.component';

const routes: Routes = [
  { path : 'login', component : LoginwithpictureComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path : 'signup', component : SignupComponent },
  { path : 'todo' , component : TodoComponent },
  { path : 'home' , component : SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
