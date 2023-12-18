import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
// import { RestaurantsController } from './restaurants.controller';
import { RestaurantsResolver } from './restaurants.resolver';

@Module({
  providers: [RestaurantsResolver, RestaurantsService],
  // controllers: [RestaurantsController],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
