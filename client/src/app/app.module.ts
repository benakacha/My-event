import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatAutocompleteModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import { RegisterComponent } from './register/register.component';

// @ts-ignore


const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
};


const config = new AuthServiceConfig([
  {
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('416290839143734', fbLoginOptions)
  }
]);
export function provideConfig() {
  return config;
}

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    RegisterComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    FilterPipeModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
