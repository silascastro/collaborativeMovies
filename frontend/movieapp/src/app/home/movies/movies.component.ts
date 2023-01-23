import { Movie } from './../../core/models/movie';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { CreateMovieModalComponent } from 'src/app/shared/create-movie-modal/create-movie-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService],
})
export class MoviesComponent implements OnInit {
  public loading = false;
  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private dialog: MatDialog
  ) {}

  public form = this.fb.group({
    movies: '',
  });

  public ngOnInit(): void {
    this.loading = true;
    this.getAllMovies();
  }

  public getAllMovies(): void {
    this.moviesService.getAllMovies().subscribe((result: Movie[]) => {
      this.form.get('movies').setValue(result);
      this.loading = false;
    });
  }

  public openCreateMovieModal(): void {
    this.dialog
      .open(CreateMovieModalComponent, {
        data: {
          title: 'olá',
        },
        disableClose: true,
        height: '400px',
        width: '500px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.createMovie(result);
        }
      });
  }

  public createMovie(data): void {
    this.moviesService.createMovie(data).subscribe((result) => {
      console.log(result);
    });
  }

  public get movies(): any {
    return this.form.get('movies');
  }
}
