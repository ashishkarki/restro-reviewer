import Review from 'src/reviews/models/review.model';

/**
 * @deprecated use Restaurant entity instead.
 */
interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  location?: string;
  reviews?: Review[];
  ratings?: number[];
  averageRating?: number;
}

export default Restaurant;
