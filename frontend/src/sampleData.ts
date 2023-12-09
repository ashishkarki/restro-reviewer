import Restaurant from './models/Restaurant'

export const sampleRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'The Fancy Fork',
    cuisine: 'French',
    reviews: [
      'Great ambiance and delicious food!',
      'The service was exceptional.',
    ],
  },
  {
    id: 2,
    name: 'Sushi Sunset',
    cuisine: 'Japanese',
    reviews: ['Best sushi in town!', 'Amazing flavors and presentation.'],
  },
  {
    id: 3,
    name: 'Curry Corner',
    cuisine: 'Indian',
    reviews: ['Authentic Indian flavors.', 'Spicy and flavorful dishes!'],
  },
]
