import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie;
  @Output()
  movieId = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  selectMovie() {
    console.log(this.movie.id);
    this.movieId.emit(this.movie.id);
  }
}
