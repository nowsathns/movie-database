import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';
import {MovieDetail} from './movie-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie Database!';
  activeLinkIndex = 0;
  tabLinks = [
    {label: 'Home', link: 'home'},
    {label: 'Movie', link: 'movie'},
  ];
  constructor() {}
  ngOnInit() {
  }
  }
