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
      'Great ambiance and delicious food!',
      'The service was exceptional.',
    ],
  },
  {
    id: 2,
    name: 'Sushi Sunset',
    cuisine: 'Japanese',
    location: 'Tokyo, Japan',
    ratings: [4.0, 4.5],
    averageRating: 4.2,
    reviews: ['Best sushi in town!', 'Amazing flavors and presentation.'],
  },
  {
    id: 3,
    name: 'Curry Corner',
    cuisine: 'Indian',
    location: 'Mumbai, India',
    ratings: [3.5],
    averageRating: 3.6,
    reviews: ['Authentic Indian flavors.', 'Spicy and flavorful dishes!'],
  },
];
