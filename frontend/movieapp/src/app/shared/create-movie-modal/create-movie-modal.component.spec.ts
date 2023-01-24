import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieModalComponent } from './create-movie-modal.component';

describe('CreateMovieModalComponent', () => {
  let component: CreateMovieModalComponent;
  let fixture: ComponentFixture<CreateMovieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMovieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
