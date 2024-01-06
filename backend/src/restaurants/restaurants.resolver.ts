import { Args, Query, Resolver } from '@nestjs/graphql';

import { Restaurant } from './models/restaurant.entity';
import { DynamoDBService } from 'src/dynamodb/dynamodb.service';
import { ConsoleLogger } from '@nestjs/common';

@Resolver(Restaurant)
export class RestaurantsResolver {
  private readonly logger = new ConsoleLogger(RestaurantsResolver.name);

  constructor(private readonly dynamoDBService: DynamoDBService) {}

  @Query(() => [Restaurant])
  async restaurants(): Promise<Restaurant[]> {
    this.logger.log('Fetching all restaurants');
    return await this.dynamoDBService.getAllRestaurants();
  }

  @Query(() => Restaurant, { nullable: true })
  async restaurant(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Restaurant> | undefined {
    return this.dynamoDBService.getRestaurantById(id);
  }
}
