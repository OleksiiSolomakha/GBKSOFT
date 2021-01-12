import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserShort} from '../../interfaces/UserShort';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://test-api.ci.gbksoft.net/rest/v1/user/';

  constructor(private http: HttpClient) { }

  public registerNewUser(user: UserShort): Observable<UserShort> {
    return this.http.post<UserShort>(this.api + 'register', user);
  }

  public loginCurrentUser(user: UserShort): Observable<UserShort> {
    return this.http.post<UserShort>(this.api + 'login', user);
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
