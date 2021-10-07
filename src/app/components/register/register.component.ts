import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  credentials : Register = {
    username:"",
    email: "",
    password: "",
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  //register method
  register(){
    this.authService.register(this.credentials)
  }

}
