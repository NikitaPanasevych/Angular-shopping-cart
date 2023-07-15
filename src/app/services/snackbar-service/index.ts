import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {}

  snackbarCall = (message: string) => {
    this.snackbar.open(message, 'close', {
      duration: 2000,
    });
  }
}
