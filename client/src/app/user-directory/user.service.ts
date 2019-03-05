  import { Injectable } from '@angular/core';
  import {User} from './user';
  import {Observable} from 'rxjs';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {environment} from '../../environments/environment';
  import {catchError} from 'rxjs/operators';

  @Injectable({
  providedIn: 'root'
})
export class UserService {
    private api = environment;
    private user: object = User;

    constructor(private http: HttpClient) { }

    createNew(user: User): Observable<User> {
      this.user = user;
      return this.http.post<User>(this.api.registerUrl, this.user,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      // @ts-ignore
    }).pipe(catchError(this.handleError('signInNormal', this.user)));
  }
}
