import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.entity';

@Resolver(Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Query(() => [Restaurant])
  async restaurants(): Promise<Restaurant[]> {
    return await this.restaurantsService.findAll();
  }

  @Query(() => Restaurant, { nullable: true })
  async restaurant(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Restaurant> | undefined {
    return this.restaurantsService.findOne(id);
  }
}
