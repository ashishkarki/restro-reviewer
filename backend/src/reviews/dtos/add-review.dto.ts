import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class AddReviewDto {
  @IsString()
  @IsNotEmpty()
  restaurantId: string;

  @IsString()
  @IsNotEmpty()
  reviewText: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
