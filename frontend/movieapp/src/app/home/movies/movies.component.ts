import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public length = 3;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.length = 2;
    }, 10000);
  }
}
