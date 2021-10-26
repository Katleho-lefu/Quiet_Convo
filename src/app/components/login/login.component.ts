import { Login } from './../../interfaces/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credentials : Login = {
    email: "",
    password: "",
  }
  
  dont_have_account: boolean = false;
  wrong_credentials: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {}

  //login method
  login(){
    this.authService.login(this.credentials).subscribe((res: any) => {
      // check if either credential is wrong
      if(res.email!==this.credentials.email || res.password!== this.credentials.password){
        this.wrong_credentials = !this.wrong_credentials;
      }
      // check if both email AND password are wrong
      else if(this.credentials.email!==res.email && this.credentials.password!==res.password){
        this.dont_have_account = !this.dont_have_account;
      }
      console.log(res);
		},

		(err: any) => {
      console.log(err.status);
		}
		)
  }

}
