import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CreateMovieModalComponent } from './create-movie-modal/create-movie-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [CreateMovieModalComponent, LoadingComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,

    ReactiveFormsModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,

    ReactiveFormsModule,
  ],
})
export class SharedModule {}
