import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Location } from './location.entity';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  cuisine: string;

  @Field(() => Location, { nullable: true })
  location?: Location;

  @Field(() => [String], { nullable: true })
  reviews?: string[];

  @Field(() => [Float], { nullable: true })
  ratings?: number[];

  @Field(() => Float, { nullable: true })
  averageRating?: number;
}
