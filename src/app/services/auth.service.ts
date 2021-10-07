import { Login, Register } from './../interfaces/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "localhost:3001/auth";
  constructor( private http: HttpClient) { }

  //login method
  login( credentials: Login){
    console.log('something');
  }

  register(credentials: Register){
    console.log(credentials);
  }

}
