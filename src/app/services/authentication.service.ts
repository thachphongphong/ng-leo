import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthenticationService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasUser());
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
      return this.http.post<any>(API_URL + '/api/login', { username: username, password: password })
          .map(res => {
              let user = res.data;
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  console.log(user);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('token', user.token);
                  this.isLoginSubject.next(true);
              }

              return user;
          }).catch(this.handleError);
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('token');
      this.isLoginSubject.next(false);
  }

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  private hasUser() : boolean {
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
}
