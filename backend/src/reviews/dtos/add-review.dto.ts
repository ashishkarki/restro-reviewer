import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

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

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Number)
  rating: number;
}
