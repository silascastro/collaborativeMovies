import { API } from './common';

export const MOVIESAPP = {
  MOVIES: `${API}/movies`,
  MOVIE: (id) => `${API}/movies/${id}`,
  REVIEWS: `${API}/reviews`,
};

export const UPLOAD = {
  IMAGES: `${API}/upload-image`,
};
