import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  url = "./assets/loginin_facebook_logo.png"
  backgroundImage:string="./assets/2314983.png"
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash";
  loginForm! : FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['' , [Validators.required, Validators.email]],
      password : ['' , [Validators.required, Validators.minLength(6)]],
    })
  }

  hideShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid){
      // send the obj to the database
    }else{
      //throw error
    }
  }

}
