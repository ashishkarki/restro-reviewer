import { Injectable } from '@nestjs/common';
import Restaurant from './models/restaurant.model';
import { sampleRestaurants } from './models/restaurant.sample';

@Injectable()
export class RestaurantsService {
  private readonly restaurants: Restaurant[] = [...sampleRestaurants];

  async findAll(): Promise<Restaurant[]> {
    return this.restaurants;
  }

  async findOne(id: number): Promise<Restaurant> {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }
}
