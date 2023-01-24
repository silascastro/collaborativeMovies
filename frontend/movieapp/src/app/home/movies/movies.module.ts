import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { NewReviewComponent } from './movie-description/new-review/new-review.component';

@NgModule({
  declarations: [MoviesComponent, MovieDescriptionComponent, NewReviewComponent],
  imports: [RouterModule, MoviesRoutingModule, SharedModule, CommonModule],
  exports: [],
  providers: [],
})
export class MoviesModule {}
