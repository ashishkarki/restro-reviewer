import { gql } from '@apollo/client'

export const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($restaurantId: Int!, $reviewText: String!, $rating: Int!) {
    addReview(
      restaurantId: $restaurantId
      reviewText: $review
      rating: $rating
    ) {
      id
      reviewText
      rating
      restaurantId
      restaurant {
        name
        cuisine
      }
    }
  }
`
