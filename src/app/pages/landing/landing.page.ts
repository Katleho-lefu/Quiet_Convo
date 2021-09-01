import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  have_account: boolean = true;
  constructor() {}

  ngOnInit() {}

  goToRegister(){
    this.have_account = !this.have_account;
  }

}
