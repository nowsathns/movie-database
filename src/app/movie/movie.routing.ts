import {RouterModule, Routes} from '@angular/router';
import {MovieSectionComponent} from '../movie-section/movie-section.component';
import {MovieDetailSectionComponent} from '../movie-detail/movie-detail-section/movie-detail-section.component';
export const routes: Routes = [

  {path: '', component: MovieSectionComponent},
  {path: ':id', component: MovieDetailSectionComponent},

];
export const movieRouting = RouterModule.forChild(routes);
