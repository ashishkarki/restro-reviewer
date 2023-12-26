import Restaurant from './restaurant.model';

export const sampleRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'The Fancy Fork',
    cuisine: 'French',
    location: 'New York, USA',
    ratings: [4.5, 4.0, 4.2],
    averageRating: 4.3,
    reviews: [
      {
        id: 1,
        restaurantId: 1,
        reviewText: 'Great ambiance and delicious food!',
        rating: 4,
      },
      {
        id: 1,
        restaurantId: 1,
        reviewText: 'The service was exceptional.',
        rating: 5,
      },
      ,
    ],
  },
  {
    id: 2,
    name: 'Sushi Sunset',
    cuisine: 'Japanese',
    location: 'Tokyo, Japan',
    ratings: [4.0, 4.5],
    averageRating: 4.2,
    reviews: [
      {
        id: 1,
        restaurantId: 2,
        reviewText: 'The sushi was fresh and delicious.',
        rating: 4,
      },
    ],
  },
  {
    id: 3,
    name: 'Curry Corner',
    cuisine: 'Indian',
    location: 'Mumbai, India',
    ratings: [3.5],
    averageRating: 3.6,
    reviews: [
      {
        id: 1,
        restaurantId: 3,
        reviewText: 'The curry was very spicy.',
        rating: 3,
      },
      {
        id: 1,
        restaurantId: 3,
        reviewText: 'The service was slow.',
        rating: 2,
      },
      {
        id: 1,
        restaurantId: 3,
        reviewText: 'The food was great and happening.',
        rating: 4.5,
      },
    ],
  },
];
