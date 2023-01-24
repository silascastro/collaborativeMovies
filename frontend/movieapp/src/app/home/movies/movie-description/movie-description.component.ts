import { CreateMovieModalComponent } from 'src/app/shared/create-movie-modal/create-movie-modal.component';
import { Review } from './../../../core/models/review';
import { FeedbackService } from './../../../core/services/feedback.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from './../../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { UPLOADS } from 'src/app/core/constants/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css'],
  providers: [FeedbackService],
})
export class MovieDescriptionComponent implements OnInit {
  public id: string;
  public uploadUrl = UPLOADS;
  public loadingReviews = false;

  constructor(
    private movieService: MoviesService,
    private dialog: MatDialog,
    private router: ActivatedRoute,
    private fbService: FeedbackService,
    private routerNavigate: Router
  ) {}

  public movie: Movie = null;
  public reviews: Review[] = [];

  public rate = Array(5)
    .fill(1)
    .map((e, index) => index + 1);

  public ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
    });
    this.loadingReviews = true;
    this.getMovie();
  }

  public getMovie(): void {
    setTimeout(() => {
      this.movieService.getOneMovie(this.id).subscribe(
        (response) => {
          this.loadingReviews = false;
          if (!response) {
            this.routerNavigate.navigate(['/movies']);
          }
          const { reviews } = response;
          this.reviews = reviews;
          this.movie = response;
        },
        (err) => {
          console.log(err);
          this.fbService.showFeedbackSnack('aconteceu um erro!');
        }
      );
    });
  }

  public openEditModal(): void {
    this.dialog
      .open(CreateMovieModalComponent, {
        data: {
          movie: this.movie,
        },
        disableClose: true,
        height: '450px',
        width: '500px',
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.updateMovie(result);
        }
      });
  }

  public updateMovie(data): void {
    this.movieService.updateMovie(this.id, data).subscribe(
      () => {
        this.fbService.showFeedbackSnack('Filme Atualizado com sucesso!');
        this.getMovie();
      },
      () => {
        this.fbService.showFeedbackSnack('erro ao Atualizar Filme!');
      }
    );
  }

  public teste(event) {
    this.getMovie();
  }
}
