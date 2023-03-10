import { ReviewService } from './../../../../core/services/review.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css'],
  providers: [FeedbackService, ReviewService],
})
export class NewReviewComponent implements OnInit {
  @Output() newReviewEvent = new EventEmitter<object>();
  @Input('movieId') movieId;

  public rate = Array(5)
    .fill(1)
    .map((e, index) => index + 1);

  public form = this.fb.group({
    review_note: ['', Validators.required],
    review_comentary: ['', Validators.required],
    review_rate: ['', Validators.required],
  });

  constructor(
    private reviewService: ReviewService,
    private fb: FormBuilder,
    private fbService: FeedbackService,
    private routerNavigate: Router
  ) {}

  ngOnInit(): void {}

  public submit(): void {
    const data = {
      review_note: this.review_note,
      review_comentary: this.review_comentary,
      review_rate: this.review_rate,
      fk_movie_id: this.movieId,
    };
    this.reviewService.postReview(data).subscribe(
      (result) => {
        this.fbService.showFeedbackSnack('Review enviada com sucesso!');
        this.newReviewEvent.emit(data);
      },
      (err) => {
        this.fbService.showFeedbackSnack('aconteceu um erro!');
      }
    );
  }

  public get review_note(): any {
    return this.form.get('review_note')?.value;
  }

  public get review_comentary(): any {
    return this.form.get('review_comentary')?.value;
  }

  public get review_rate(): any {
    return this.form.get('review_rate')?.value;
  }
}
