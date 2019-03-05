import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../user-directory/user';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from '../user-directory/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private socialUser: any = SocialUser;
  private loggedIn: boolean;
  private user: any = User;
  private api = environment;
  private handleError: string;
  private service: any = UserService;
  private newUser: any;
  // @ts-ignore
  constructor(private service: UserService, private authService: AuthService, private http: HttpClient) {
    console.log(this.user);
  }
  showUsers() {
    this.http.get('http://localhost:8000/api/users').subscribe((data) => {
      // @ts-ignore
      console.log(data);

    });
  }

  signInApi() {
    // @ts-ignore
   this.service.createNew(this.newUser)
    // @ts-ignore
      .subscribe(users => this.user.push(this.user));
  }

  // @ts-ignore
  signInWithFB() {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((socialUser) => {
      this.socialUser = socialUser;
      this.loggedIn = (socialUser != null);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
  console.log(this.socialUser);
  this.showUsers();


  }

}
