import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private snackBar: MatSnackBar) {}

  public showFeedbackSnack(message: string): void {
    this.snackBar.open(message, 'fechar');
  }
}
