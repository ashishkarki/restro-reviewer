import { Args, Query, Resolver } from '@nestjs/graphql';

import { Restaurant } from './models/restaurant.entity';
import { DynamoDBService } from 'src/dynamodb/dynamodb.service';

@Resolver(Restaurant)
export class RestaurantsResolver {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  @Query(() => [Restaurant])
  async restaurants(): Promise<Restaurant[]> {
    return await this.dynamoDBService.getAllRestaurants();
  }

  @Query(() => Restaurant, { nullable: true })
  async restaurant(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Restaurant> | undefined {
    return this.dynamoDBService.getRestaurantById(id);
  }
}
