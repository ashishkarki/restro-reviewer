import { ReactNode } from 'react'
import Restaurant from '../models/Restaurant'
import {
  RestaurantDetailsContainer as Container,
  RestaurantDetailsParagraph as P,
  RestaurantDetailsReviewItem as ReviewItem,
  Heading2,
} from '../styles'
import { useLocation } from 'react-router-dom'

/**
 * Renders the details of a restaurant.
 */
const RestaurantDetails: React.FC = () => {
  const location = useLocation()
  const restaurant = location.state?.restaurant
  const {
    name,
    cuisine,
    location: restaurantLocation,
    ratings,
    reviews,
  } = restaurant

  return (
    <Container>
      <Heading2>{name}</Heading2>
      <P>Cuisine: {cuisine}</P>
      <P>Location: {restaurantLocation}</P>
      <P>Ratings: {ratings}</P>
      <P>Reviews:</P>
      <P>
        {reviews?.map((review: string, index: number) => (
          <ReviewItem key={index}>{review}</ReviewItem>
        ))}
      </P>
    </Container>
  )
}

export default RestaurantDetails
