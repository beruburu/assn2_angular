import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Login } from './login';
import { Token } from './token';

@Injectable()
export class LoginService {
  private BASE_URL = "http://lmycweb.azurewebsites.net/connect/token";
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  token: string;

  constructor(private http: Http) { }

  getToken(login: Login): Promise<Token> {
  	let body = `username=${login.username}&password=${login.password}&grant_type=password`;

  	/*JSON.stringify({
  		"username":login.username,
  		"password":login.password,
  		"grant_type":"password"
  	});*/

  	return this.http.post(this.BASE_URL, body, { headers: this.headers})
  	.toPromise()
  	.then(res => res.json().data)
  	.catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  	console.error('An error has occurred', error);
  	return Promise.reject(error.massage || error);
  }
}
