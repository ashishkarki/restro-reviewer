import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Review } from './models/review.entity';
import { RestaurantsService } from 'src/restaurants/restaurants.service';

/**
 * @deprecated This service is no longer used in favor of GraphQL resolvers and DynamoDBService.
 */
@Injectable()
export class ReviewsService {
  constructor(private readonly restaurantService: RestaurantsService) {}

  async addReview(
    restaurantId: number,
    reviewText: string,
    rating: number,
  ): Promise<Review> {
    const reviewedRestaurant =
      await this.restaurantService.findOne(restaurantId);

    if (!reviewedRestaurant) {
      throw new Error('Restaurant not found');
    }

    // add this review-text to the restaurant's review array
    reviewedRestaurant.reviews = reviewedRestaurant.reviews || [];
    reviewedRestaurant.reviews.push(reviewText);

    return {
      id: uuidv4(), // mock ID or not since uuid is used now?
      restaurantId,
      reviewText,
      rating,
      restaurant: reviewedRestaurant,
    } as Review;
  }
}
