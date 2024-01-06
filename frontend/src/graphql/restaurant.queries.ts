import { gql } from '@apollo/client';

export const GET_ALL_RESTAURANTS = gql`
    query GetAllRestaurants {
        restaurants {
            id
            name
            cuisine
            location {
                streetNumber
                streetName
                aptUnit
                city
                stateProvince
                country
                zipPostalCode
            }
            reviews
            ratings
            averageRating
        }
    }
`;

export const GET_RESTAURANT_BY_ID = gql`
    query GetRestaurantById($id: Int!) {
        restaurant(id: $id) {
            id
            name
            cuisine
            location {
                streetNumber
                streetName
                aptUnit
                city
                stateProvince
                country
                zipPostalCode
            }
            reviews
            ratings
            averageRating
        }
    }
`;
