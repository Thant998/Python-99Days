import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseURL = "http://localhost:8080/api/v1/user";

  constructor() { }
 
  // createUser(user: User): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, user);
  // }

  // getUserList(): Observable<User[]>{
  //   return this.httpClient.get<User[]>(`${this.baseURL}`);
  // }

  // getUserByEmail(email: String): Observable<User>{
  //   return this.httpClient.get<User>(`${this.baseURL}/${email}`);
  // }

}
