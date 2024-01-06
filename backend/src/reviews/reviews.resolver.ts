import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DynamoDBService } from 'src/dynamodb/dynamodb.service';
import { AddReviewDto } from './dtos/add-review.dto';
import { Restaurant } from 'src/restaurants/models/restaurant.entity';
import { ConsoleLogger } from '@nestjs/common';

@Resolver(Restaurant)
export class ReviewResolver {
  private readonly logger = new ConsoleLogger(ReviewResolver.name);

  constructor(private readonly dynamoDBService: DynamoDBService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Restaurant, { name: 'addReview' })
  async addReview(
    @Args('addReviewData') addReviewData: AddReviewDto,
  ): Promise<Restaurant> {
    const { restaurantId, reviewText, rating } = addReviewData;

    this.logger.log(
      `Adding review for restaurant ${restaurantId}, with parameters:
      restaurantId: ${restaurantId}, reviewText: ${reviewText}, rating: ${rating}`,
    );
    return this.dynamoDBService.addReview(restaurantId, reviewText, rating);
  }
}
