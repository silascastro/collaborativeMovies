import { Movie } from './../models/movie';
import { MOVIESAPP } from './../constants/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIESAPP.MOVIES);
  }

  public createMovie(data): Observable<any> {
    return this.http.post(MOVIESAPP.MOVIES, data);
  }
}
