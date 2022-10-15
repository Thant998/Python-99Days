import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TodoComponent } from './todo/todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatIconModule }  from '@angular/material/icon';
import { MatButtonModule }  from '@angular/material/button';
import { ReactiveFormsModule }  from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopUpWorkspaceComponent } from './pop-up-workspace/pop-up-workspace.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeboardcreateComponent } from './homeboardcreate/homeboardcreate.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginwithpictureComponent } from './loginwithpicture/loginwithpicture.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    PopUpWorkspaceComponent,
    ProfileComponent,
    HomeboardcreateComponent,
    LoginUserComponent,
    SignupComponent,
    LoginwithpictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [PopUpWorkspaceComponent]
})
export class AppModule { }
