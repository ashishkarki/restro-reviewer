import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Review } from './models/review.entity';
import { DynamoDBService } from 'src/dynamodb/dynamodb.service';
import { AddReviewDto } from './dtos/add-review.dto';
import { Restaurant } from 'src/restaurants/models/restaurant.entity';

@Resolver(Review)
export class ReviewResolver {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Review, { name: 'addReview' })
  async addReview(
    @Args('addReviewData') addReviewData: AddReviewDto,
  ): Promise<Restaurant> {
    const { restaurantId, reviewText, rating } = addReviewData;

    return this.dynamoDBService.addReview(restaurantId, reviewText, rating);
  }
}
