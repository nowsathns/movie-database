import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movie;
  constructor() { }

  ngOnInit() {
    this.movie = {
      id: 1,
      name: 'Matrix',
      des: ' A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL50_SY1000_CR0,0,665,1000_AL_.jpg'
    };
  }

}
