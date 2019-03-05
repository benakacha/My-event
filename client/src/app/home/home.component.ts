import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSelect, MatAutocomplete, MatSelectionList} from '@angular/material';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private api = environment;
  public  events: object;
  public categories: object;
  public selectedCategory: any = { category_id: this.events};
  public  nameFilter: any = { start: {timezone: ''} };
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getEvents();
    this.getEventCategory();
  }
  getEvents() {
    this.http.get(this.api.apiUrl + this.api.key).subscribe((data) => {
      // @ts-ignore
      this.events = data.events;
      console.log(data);

    });
  }

  getEventCategory() {
    this.http.get(this.api.apiUrlCat + this.api.key).subscribe((data) => {
      // @ts-ignore
      this.categories = data.categories;
    });
  }
}
