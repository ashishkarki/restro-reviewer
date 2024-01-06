/**
 * @deprecated No need for Review model or entity
 */
interface Review {
  id: number;
  restaurantId: number;
  reviewText: string;
  rating: number;
}

export default Review;
