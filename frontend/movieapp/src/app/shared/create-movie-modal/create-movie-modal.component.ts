import { MoviesService } from './../../core/services/movies.service';
import { UploadImageService } from './../../core/services/upload-image.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-movie-modal',
  templateUrl: './create-movie-modal.component.html',
  styleUrls: ['./create-movie-modal.component.css'],
})
export class CreateMovieModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CreateMovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private uploadImageService: UploadImageService,
    private moviesService: MoviesService
  ) {}

  public fileUploaded = false;

  public form = this.fb.group({
    movieName: ['', Validators.required],
    movieDescription: ['', Validators.required],
    file: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log(this.data);
  }
  public close(data?: any): void {
    this.dialogRef.close(data);
  }

  public setNewImage(event): void {
    const [file] = event.target.files;
    this.validationInputFile(file);
  }

  public uploadImage(): void {
    const data = this.file.value;
    this.uploadImageService.postImage(data).subscribe(
      (response: any) => {
        const { filename } = response.data;
        const movie = {
          movie_name: this.form.get('movieName').value,
          movie_description: this.form.get('movieDescription').value,
          movie_image: filename,
        };
        this.close(movie);
        this.fileUploaded = true;
      },
      ({ error }) => {
        this.fileUploaded = false;
        this.file.reset();
      }
    );
  }

  public validationInputFile(file): void {
    if (file) {
      if (this.isFileTypeCorrect(file)) {
        this.file.patchValue(file);
        this.fileUploaded = true;
      } else {
        this.file.setErrors({ fileIncorrect: true });
      }
    } else {
      this.fileUploaded = false;
    }

    this.form.markAsPristine({ onlySelf: true });
  }

  public isFileTypeCorrect(file: File): boolean {
    const acceptFileTypeApkUploaded = ['image/jpeg', 'image/jpg', 'image/png'];
    return acceptFileTypeApkUploaded.includes(file.type);
  }

  public clearFile(): void {
    this.fileUploaded = false;
    this.file.setValue(null);
  }

  public get file(): any {
    return this.form.get('file');
  }
}
