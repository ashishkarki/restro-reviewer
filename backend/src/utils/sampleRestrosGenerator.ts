import AWS from 'aws-sdk';
import { faker } from '@faker-js/faker';
import Review from 'src/reviews/models/review.model';
import Restaurant from 'src/restaurants/models/restaurant.model';
import { RESTAURANT_TABLE_NAME } from './constants';

// configure the AWS SDK to use the local DynamoDB instance
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000', // use DynamoDB on local instance
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});

// Function to generate a sample restaurant with reviews
function generateRestaurant(restaurantId: number): Restaurant {
  const numberOfReviews = faker.datatype.number({ min: 2, max: 5 });
  const reviews: Review[] = [];
  let totalRating = 0;

  for (let i = 0; i < numberOfReviews; i++) {
    const rating = faker.number.int({ min: 1, max: 5 });
    totalRating += rating;
    reviews.push({
      id: faker.number.int(),
      restaurantId,
      reviewText: faker.lorem.sentence(),
      rating,
    });
  }

  const averageRating = totalRating / numberOfReviews;

  return {
    id: restaurantId,
    name: faker.company.name(),
    cuisine: faker.commerce.productMaterial(),
    location: faker.location.streetAddress(),
    reviews,
    ratings: reviews.map((review) => review.rating),
    averageRating,
  };
}

// Insert sample restaurants into DynamoDB
async function insertSampleData() {
  for (let i = 1; i <= 5; i++) {
    const restaurant = generateRestaurant(i);
    const params = {
      TableName: RESTAURANT_TABLE_NAME,
      Item: restaurant,
    };

    try {
      await dynamoDB.put(params).promise();
      console.log(`Inserted restaurant with id ${i}`);
    } catch (err) {
      console.error('Error inserting item:', err);
    }
  }
}

insertSampleData();
