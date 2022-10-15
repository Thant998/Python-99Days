import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

//   loginUser(userEmail: string, password: string) {
//     this.userService.getUserByEmail(userEmail).subscribe(data => {
//     this.user = data;
//   }, error => console.log(error));
//   if (userEmail === this.user.email && password === this.user.password) {
//     sessionStorage.setItem('userEmail', userEmail)
//     // sessionStorage.setItem('userName', user.name)
//     return true;
//     } else {
//     return false;
//   }
// }

}
