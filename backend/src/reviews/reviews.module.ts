import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { ReviewResolver } from './reviews.resolver';

/**
 * DEPRECATED: This module and all its contents are deprecated
 * @deprecated This service is no longer used in favor of GraphQL resolvers and DynamoDBService.
 */
@Module({
  providers: [ReviewResolver, ReviewsService],
  imports: [RestaurantsModule],
})
export class ReviewsModule {}
