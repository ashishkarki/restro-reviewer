import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import Restaurant from './models/restaurant.model';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Restaurant | HttpException {
    const restaurantId = parseInt(id, 10);
    const restaurant = this.restaurantsService.findOne(restaurantId);

    if (!restaurant) {
      throw new HttpException(
        `Restaurant wih id: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return restaurant;
  }
}