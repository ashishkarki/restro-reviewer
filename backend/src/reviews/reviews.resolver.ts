import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Review } from './models/review.entity';
import { ReviewsService } from './reviews.service';

@Resolver(Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewsService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Review, { name: 'addReview' })
  async addReview(
    @Args('restaurantId', { type: () => Int }) restaurantId: number,
    @Args('reviewText') reviewText: string,
    @Args('rating') rating: number,
  ): Promise<Review> {
    return await this.reviewService.addReview(restaurantId, reviewText, rating);
  }
}
