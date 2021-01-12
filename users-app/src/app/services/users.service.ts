import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserFull} from '../interfaces/UserFull';
import {catchError} from 'rxjs/operators';
import {UserResponseArray, UserResponseObject} from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api = 'https://test-api.ci.gbksoft.net/rest/v1/user';

  constructor(private http: HttpClient) { }

  public getUsersList(perPage: number = 20, page: number = 1): Observable<UserResponseArray> {
    return this.http.get<UserResponseArray>(this.api, {params: {perPage: perPage.toString(), page: page.toString()}})
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public getCurrentUser(): Observable<UserResponseObject> {
    return this.http.get<UserResponseObject>(`${this.api}/current`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public getUserById(id: number): Observable<UserResponseObject> {
    return this.http.get<UserResponseObject>(`${this.api}/${id}`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public searchUsers(search: string | string[]): Observable<UserResponseArray> {
    return this.http.get<UserResponseArray>(`${this.api}/search`, {params: {searchString: search}})
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public updateUserProfile(user: UserFull): Observable<UserFull> {
    return this.http.put<UserFull>(`${this.api}/profile`, user)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public updateUserLocation(cords: {}): Observable<any> {
    return this.http.put<any>(`${this.api}/location`, cords)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public setUserProfileImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.api}/profile/image`, formData)
      .pipe(
        catchError(err => throwError(err))
    );
  }

  public logoutCurrentUser(): Observable<any> {
    return this.http.post<any>(`${this.api}/logout`, {})
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
