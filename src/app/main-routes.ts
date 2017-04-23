import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieSectionComponent} from './movie-section/movie-section.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieDetailSectionComponent} from './movie-detail/movie-detail-section/movie-detail-section.component';


export const TABS_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path:'movie-section', loadChildren:'app/movie/movie.module#MovieModule'}
];
