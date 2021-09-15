import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  //back to previous page
	back() {
		this.location.back();
	  }

}
