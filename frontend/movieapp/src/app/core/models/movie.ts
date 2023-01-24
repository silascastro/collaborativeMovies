import { Review } from './review';
export class Movie {
  public movie_id: number;
  public movie_name?: string;
  public movie_description: string;
  public movie_rate?: string;
  public movie_director?: string;
  public movie_image?: string;
  public movie_link?: string;
  public movie_gender?: string;
  public reviews: Review[];
}
