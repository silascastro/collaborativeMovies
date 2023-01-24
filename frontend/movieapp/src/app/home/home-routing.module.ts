import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('./movies/movies.module').then(
            (module) => module.MoviesModule
          ),
      },
      {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
