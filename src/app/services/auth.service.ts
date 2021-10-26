import { Login, Register } from './../interfaces/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
	providedIn: 'root'
})
export class AuthService {

	url: string = 'http://localhost:3001';
	constructor( private http: HttpClient) { }

	//register method
	register(credentials: Register){    
		return  this.http.post(`${this.url}/auth/register/`, credentials)
	}

	//login method
	login( credentials: Login){
		return  this.http.post(`${this.url}/auth/login/`, credentials)
	}

	

}
