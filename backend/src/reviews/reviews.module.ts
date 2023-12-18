import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { ReviewResolver } from './reviews.resolver';

@Module({
  providers: [ReviewResolver, ReviewsService],
  imports: [RestaurantsModule],
})
export class ReviewsModule {}
