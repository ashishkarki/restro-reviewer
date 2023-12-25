import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import Restaurant from './models/restaurant.model';

/**
 * @deprecated This service is no longer used in favor of GraphQL resolvers and DynamoDBService.
 */
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Restaurant | HttpException> {
    const restaurantId = parseInt(id, 10);
    const restaurant = await this.restaurantsService.findOne(restaurantId);

    if (!restaurant) {
      throw new HttpException(
        `Restaurant wih id: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return restaurant;
  }
}
