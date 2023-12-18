import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/restaurant.entity';

@ObjectType()
export class Review {
  @Field(() => String)
  id: number;

  @Field(() => Int)
  restaurantId: number;

  @Field()
  reviewText: string;

  @Field()
  rating: number;

  @Field(() => Restaurant)
  restaurant: Restaurant;
}
