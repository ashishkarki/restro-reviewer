import { Injectable, Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import * as AWS from 'aws-sdk';
import { Restaurant } from 'src/restaurants/models/restaurant.entity';

import { RESTAURANT_TABLE_NAME } from 'src/utils';

@Injectable()
export class DynamoDBService {
  private readonly dynamoDB: AWS.DynamoDB.DocumentClient;
  private readonly logger = new Logger(DynamoDBService.name);
  private readonly databaseUrl = process.env.RUNNING_IN_DOCKER
    ? 'http://dynamodb-local:8000'
    : 'http://localhost:8000';

  constructor() {
    AWS.config.update({
      region: 'local',
      accessKeyId: 'fakeMyKeyId',
      secretAccessKey: 'fakeSecretAccessKey',
    });

    this.dynamoDB = new AWS.DynamoDB.DocumentClient({
      endpoint: this.databaseUrl,
    });
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    const params = {
      TableName: RESTAURANT_TABLE_NAME,
    };

    this.logger.log('Preparing to fetch all restaurants');
    try {
      this.logger.log(`Fetching restaurants from DynamoDB...`);
      const data = await this.dynamoDB.scan(params).promise();
      const dataWithMappedLocation = data.Items.map((item) => {
        const {
          streetNumber,
          streetName,
          city,
          stateProvince,
          country,
          zipPostalCode,
        } = item.location;

        return {
          ...item,
          location: {
            streetNumber,
            streetName,
            city,
            stateProvince,
            country,
            zipPostalCode,
          },
        };
      });
      // this.logger.log(
      //   'DynamoDBService: getAllRestaurants: Transformed Data:',
      //   dataWithMappedLocation,
      // );

      return dataWithMappedLocation as Restaurant[];
    } catch (error) {
      this.logger.error(`Error fetching restaurants: ${error}`);
      throw error;
    }
  }

  async getRestaurantById(id: string): Promise<Restaurant> {
    const params = {
      TableName: RESTAURANT_TABLE_NAME,
      Key: {
        id,
      },
    };

    try {
      this.logger.log(`Fetching restaurant with ID: ${id}`);
      const data = await this.dynamoDB.get(params).promise();
      if (data.Item) {
        this.logger.log(`Restaurant with ID: ${id} fetched successfully`);
        return data.Item as Restaurant;
      } else {
        this.logger.warn(`Restaurant with ID: ${id} not found`);
        return null; // Or handle as per your application's requirement
      }
    } catch (error) {
      this.logger.error(`Error fetching restaurant with ID: ${id}`, error);
      throw error; // Or handle the error as appropriate for your application
    }
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
      ReturnValues: 'ALL_NEW',
    };

    const data = await this.dynamoDB.update(params).promise();
    return plainToClass(Restaurant, data.Attributes);
    // return {
    //   ...reviewedRestaurant,
    //   reviews: updatedReviews,
    //   ratings: updatedRatings,
    //   averageRating: updatedAverageRating,
    // } as Restaurant;
  }
}
