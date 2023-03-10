import { Review } from './../models/review';
import { Movie } from './../models/movie';
import { MOVIESAPP } from './../constants/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  public postReview(data: object): Observable<Review[]> {
    return this.http.post<Review[]>(MOVIESAPP.REVIEWS, data);
  }
}
