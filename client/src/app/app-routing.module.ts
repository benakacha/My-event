import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {RegisterComponent} from './register/register.component';

// @ts-ignore
const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'events/:id', component: EventsComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
