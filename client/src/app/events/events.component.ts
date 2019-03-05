import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {HomeComponent} from '../home/home.component';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private api = environment;
  public event: object;
  public param: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEvent();
  }

getEvent() {
  this.route.params.subscribe( params => {
    // @ts-ignore
    this.param = params.id;
  this.http.get(this.api.apiUrlEvent + this.param + this.api.tokenUrl + this.api.key ).subscribe((data) => {
      // @ts-ignore
      this.event = data;
      console.log(this.event);
    });
}
