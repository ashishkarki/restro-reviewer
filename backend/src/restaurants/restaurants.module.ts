import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './restaurants.resolver';
import { DynamoDBModule } from 'src/dynamodb/dynamodb.module';

@Module({
  imports: [DynamoDBModule],
  providers: [RestaurantsResolver],
})
export class RestaurantsModule {}
