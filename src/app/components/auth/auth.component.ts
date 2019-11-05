import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'light-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginPage = true;

  constructor() { }

  ngOnInit() {
  }

  loginPageCange() {
    this.loginPage = !this.loginPage;
  }

}
