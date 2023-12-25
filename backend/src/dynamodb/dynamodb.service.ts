import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import Restaurant from 'src/restaurants/models/restaurant.model';
import { RESTAURANT_TABLE_NAME } from 'src/utils';

@Injectable()
export class DynamoDBService {
  private readonly dynamoDB: AWS.DynamoDB.DocumentClient;

  constructor() {
    AWS.config.update({
      region: 'local',
      accessKeyId: 'fakeMyKeyId',
      secretAccessKey: 'fakeSecretAccessKey',
    });

    this.dynamoDB = new AWS.DynamoDB.DocumentClient({
      endpoint: 'http://localhost:8000', // use DynamoDB on local instance
    });
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    const params = {
      TableName: RESTAURANT_TABLE_NAME,
    };
    const data = await this.dynamoDB.scan(params).promise();

    return data.Items as Restaurant[];
  }

  async getRestaurantById(id: string): Promise<Restaurant> {
    const params = {
      TableName: RESTAURANT_TABLE_NAME,
      Key: {
        id,
      },
    };
    const data = await this.dynamoDB.get(params).promise();

    return data.Item as Restaurant;
  }

  async addReview(
    restaurantId: string,
    reviewText: string,
    rating: number,
  ): Promise<Restaurant> {
    const reviewedRestaurant = await this.getRestaurantById(restaurantId);
    if (!reviewedRestaurant) {
      throw new Error(`Restaurant with id: ${restaurantId} not found`);
    }

    // update the restaurant's reviews and ratings
    const updatedReviews = [...(reviewedRestaurant.reviews || []), reviewText];
    const updatedRatings = [...(reviewedRestaurant.ratings || []), rating];
    const updatedAverageRating =
      updatedRatings.reduce((a, b) => a + b, 0) / updatedRatings.length;

    const params = {
      TableName: RESTAURANT_TABLE_NAME,
      Key: {
        id: restaurantId,
      },
      UpdateExpression:
        'SET reviews = :reviews, ratings = :ratings, averageRating = :averageRating',
      ExpressionAttributeValues: {
        ':reviews': updatedReviews,
        ':ratings': updatedRatings,
        ':averageRating': updatedAverageRating,
      },
      //   ReturnValues: 'ALL_NEW',
    };

    // const data = await this.dynamoDB.update(params).promise();
    // return data.Attributes as Restaurant;

    await this.dynamoDB.update(params).promise();
    return {
      ...reviewedRestaurant,
      reviews: updatedReviews,
      ratings: updatedRatings,
      averageRating: updatedAverageRating,
    } as Restaurant;
  }
}
