import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail = "";
  password = "";
  invalidLogin = false

  constructor(private router: Router,private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  url = "./assets/loginin_facebook_logo.png"
  url1 = "./assets/logo.png"
  url2 = "./assets/trello.png"
  url3 = "./assets/download.png"

  // login(email:string,pwd:string) {
  //   console.log(this.userEmail)
  //   console.log(this.password)
  //   if (!this.loginservice.loginUser(email, pwd)) {
  //      this.invalidLogin = true
  //      alert("login failed")
  //   } else {
  //     this.router.navigate(['/home'])
  //     this.invalidLogin = false
  //   }
  // }

}
