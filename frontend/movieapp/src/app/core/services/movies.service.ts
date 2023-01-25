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
    console.log(MOVIESAPP.MOVIES);
    return this.http.get<Movie[]>(MOVIESAPP.MOVIES);
  }

  public getOneMovie(id: any): Observable<Movie> {
    return this.http.get<Movie>(MOVIESAPP.MOVIE(id));
  }

  public createMovie(data): Observable<any> {
    return this.http.post(MOVIESAPP.MOVIES, data);
  }

  public updateMovie(id, data): Observable<any> {
    return this.http.patch(MOVIESAPP.MOVIE(id), data);
  }

  public deleteMovie(id): Observable<any> {
    return this.http.delete(MOVIESAPP.MOVIE(id));
  }
}
