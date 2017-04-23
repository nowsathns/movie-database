import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieSectionComponent} from './movie-section/movie-section.component';


export const TABS_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'movie-section', component: MovieSectionComponent},
];
