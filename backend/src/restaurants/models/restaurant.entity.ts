import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  cuisine: string;

  @Field({ nullable: true })
  location?: string;

  @Field(() => [String], { nullable: true })
  reviews?: string[];

  @Field(() => [Float], { nullable: true })
  ratings?: number[];

  @Field(() => Float, { nullable: true })
  averageRating?: number;
}
