import {Component, Input, OnInit} from '@angular/core';
import {MovieDetail} from '../movie-detail';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movieDetail: MovieDetail;
  constructor() {
  }

  ngOnInit() {

  }

}
