import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateMovieModalComponent } from 'src/app/shared/create-movie-modal/create-movie-modal.component';
import { UPLOADS } from './../../core/constants/common';
import { Movie } from './../../core/models/movie';
import { FeedbackService } from './../../core/services/feedback.service';
import { MoviesService } from './../../core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService, FeedbackService],
})
export class MoviesComponent implements OnInit {
  public loading = false;
  public uploadUrl = UPLOADS;
  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private dialog: MatDialog,
    private feedbackService: FeedbackService
  ) {}

  public form = this.fb.group({
    movies: '',
  });

  public ngOnInit(): void {
    this.loading = true;
    this.getAllMovies();
  }

  public getAllMovies(): void {
    setTimeout(() => {
      this.moviesService.getAllMovies().subscribe((result: Movie[]) => {
        this.form.get('movies').setValue(result);
        this.loading = false;
      });
    }, 1000);
  }

  public openCreateMovieModal(): void {
    this.dialog
      .open(CreateMovieModalComponent, {
        disableClose: true,
        height: '450px',
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
    this.moviesService.createMovie(data).subscribe(
      (result) => {
        this.getAllMovies();
        this.feedbackService.showFeedbackSnack('Filme cadastrado com sucesso!');
      },
      (err) => {
        this.feedbackService.showFeedbackSnack('erro ao cadastrar Filme!');
      }
    );
  }

  public get movies(): any {
    return this.form.get('movies');
  }
}
