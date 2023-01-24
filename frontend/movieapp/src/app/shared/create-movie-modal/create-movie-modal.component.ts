import { Movie } from 'src/app/core/models/movie';
import { MoviesService } from './../../core/services/movies.service';
import { UploadImageService } from './../../core/services/upload-image.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private uploadImageService: UploadImageService
  ) {}

  public fileUploaded = false;
  public movieData: Movie;

  public form = this.fb.group({
    movieName: ['', Validators.required],
    movieDescription: ['', Validators.required],
    movieGender: ['', Validators.required],
    file: ['', Validators.required],
  });

  ngOnInit(): void {
    const data = this.data;
    this.movieData = data?.movie;
    if (this.data) {
      this.movieName.setValue(this.movieData.movie_name);
      this.movieDescription.setValue(this.movieData.movie_description);
      this.movieGender.setValue(this.movieData.movie_gender);
      this.file.setValidators(null);
    }
  }
  public close(data?: any): void {
    this.dialogRef.close(data);
  }

  public setNewImage(event): void {
    const [file] = event.target.files;
    this.validationInputFile(file);
  }

  public handlerCadastrar(): void {
    if (this.movieData && !this.file.value) {
      const data = {
        movie_name: this.movieName.value,
        movie_gender: this.movieGender.value,
        movie_description: this.movieDescription.value,
      };

      this.close(data);
    } else {
      this.uploadImage();
    }
  }

  public uploadImage(): void {
    const image = this.file.value;
    this.uploadImageService.postImage(image).subscribe(
      (response: any) => {
        const { filename } = response.data;
        const data = {
          movie_name: this.movieName.value,
          movie_gender: this.movieGender.value,
          movie_description: this.movieDescription.value,
          movie_image: filename,
        };

        this.close(data);
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

  public get movieName(): any {
    return this.form.get('movieName');
  }

  public get movieDescription(): any {
    return this.form.get('movieDescription');
  }

  public get movieGender(): any {
    return this.form.get('movieGender');
  }

  public get file(): any {
    return this.form.get('file');
  }
}
