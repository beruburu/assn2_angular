import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { Token } from '../token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  token: Token;

  constructor(
  	private loginService: LoginService,
  	private router: Router
  ) { }

  getToken(login: Login): void {
  	login.username = login.username.trim();
  	login.password = login.password.trim();

  	if(!login) {
  		return;
  	}

  	this.loginService.getToken(login).then(token => { 
      this.token = token,
      this.router.navigate(['./dashboard'])
    });
  }

  ngOnInit() {
  }

}
