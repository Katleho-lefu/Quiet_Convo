import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
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

  have_account : boolean = false

  constructor(private authService: AuthService,) { }

  ngOnInit() {}

  
  // register method
  register(){
    this.authService.register(this.credentials).subscribe((res: any) => {
			console.log(res);
		},
		(err: any) => {
			console.log(err.status);
      this.have_account= !this.have_account;
		}
		)
  }

  // toaster method
  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }
  
}
