import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  url = "./assets/Screenshot (149).png"
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash";
  signupForm! : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name : ['' , Validators.required],
      email : ['' , Validators.required],
      phone : ['' , Validators.required],
      password : ['' , Validators.required],
      confirmpassword : ['' , Validators.required],
  })
}

  hideShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

}
