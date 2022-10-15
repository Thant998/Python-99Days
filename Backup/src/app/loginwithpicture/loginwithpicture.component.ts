import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-loginwithpicture',
  templateUrl: './loginwithpicture.component.html',
  styleUrls: ['./loginwithpicture.component.css']
})
export class LoginwithpictureComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  url = "./assets/signin-image.jpg"
  url2 = "./assets/Screenshot (149).png"
  url1 = "./assets/loginin_facebook_logo.png"
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash";
  loginForm! : FormGroup;
  


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
    if (this.loginForm.valid){
      // send the obj to the database
    }else{
      //throw error
    }
  }

}

