import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import {Observable} from 'rxjs/Observable';
import {MovieDetail} from '../../movie-detail';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail-section',
  template: `
    <!--<h2><a [routerLink]="['/movie-section',1]">First Movie</a></h2>-->
    <div fxLayout.gt-sm="row" fxLayoutAlign="center center">
    <button md-fab (click)="goBack()" color="primary"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
    <app-movie-detail [movieDetail]="movieDetail$ | async"></app-movie-detail>
    </div>
  `,
  styles: [`
    button{
      margin: auto 10px;
    }
  
  `]
})
export class MovieDetailSectionComponent implements OnInit {
  movieDetail$: Observable<MovieDetail>;

  constructor(public movieService: MovieService,
              public router:Router,
              public route:ActivatedRoute) { }

  ngOnInit() {
    // this.movieDetail$ = this.movieService.getMovieDetail(id);
    const id = this.route.snapshot.params['id'];
    this.movieDetail$ = this.movieService.getMovieDetail(parseInt(id));
    console.log(id)


    // Link Observables

  // this.route.params.subscribe(
  //   (params: Params) => {
  //     this.movieDetail$ = this.movieService.getMovieDetail(parseInt(params['id']));
  //   }
  // )

  }

  goBack(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
