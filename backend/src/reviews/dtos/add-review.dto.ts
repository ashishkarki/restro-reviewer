import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

@InputType()
export class AddReviewDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  restaurantId: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  reviewText: string;

  @IsInt()
  @Min(1)
  @Max(5)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  rating: number;
}
