import { gql } from '@apollo/client';

export const ADD_REVIEW_MUTATION = gql`
    mutation AddReview(
        $restaurantId: String!
        $reviewText: String!
        $rating: Float!
    ) {
        addReview(
            addReviewData: {
                restaurantId: $restaurantId
                reviewText: $reviewText
                rating: $rating
            }
        ) {
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
