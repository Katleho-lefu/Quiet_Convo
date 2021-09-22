import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: "";
  password: "";

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  //login method
  login(){
    this.authService.login(this.email, this.password)
  }

}
