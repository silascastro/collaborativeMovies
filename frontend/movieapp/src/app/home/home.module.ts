import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, MoviesComponent, MoviesComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [],
})
export class HomeModule {}
