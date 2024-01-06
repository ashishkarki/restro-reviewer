import Restaurant from './models/Restaurant';
import Location from './models/Location';

export const sampleRestaurants: Restaurant[] = [
    {
        id: 1,
        name: 'The Fancy Fork',
        cuisine: 'French',
        location: {
            streetNumber: '123 Main St',
            streetName: 'Main Street',
            city: 'New York City',
            stateProvince: 'NY',
            country: 'USA',
            zipPostalCode: '10001',
        } as Location,
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
        location: {
            streetNumber: '456 Oak Ave',
            streetName: 'Oak Avenue',
            city: 'San Francisco',
            stateProvince: 'CA',
            country: 'USA',
            zipPostalCode: '94102',
        } as Location,
        ratings: [4.0, 4.5],
        averageRating: 4.2,
        reviews: ['Best sushi in town!', 'Amazing flavors and presentation.'],
    },
    {
        id: 3,
        name: 'Curry Corner',
        cuisine: 'Indian',
        location: {
            streetNumber: '789 Pine St',
            streetName: 'Pine Street',
            city: 'Los Angeles',
            stateProvince: 'CA',
            country: 'USA',
            zipPostalCode: '90001',
        } as Location,
        ratings: [3.5],
        averageRating: 3.6,
        reviews: ['Authentic Indian flavors.', 'Spicy and flavorful dishes!'],
    },
];
