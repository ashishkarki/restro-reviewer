import { Module } from '@nestjs/common';

import { ReviewResolver } from './reviews.resolver';
import { DynamoDBModule } from 'src/dynamodb/dynamodb.module';

@Module({
  imports: [DynamoDBModule],
  providers: [ReviewResolver],
})
export class ReviewsModule {}
