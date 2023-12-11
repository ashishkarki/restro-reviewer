import {
  RestaurantDetailsContainer as Container,
  RestaurantDetailsParagraph as P,
  RestaurantDetailsReviewItem as ReviewItem,
  Heading2,
  BackButton,
} from '../styles'
import { useLocation } from 'react-router-dom'
import { PATHS, renderStarRating } from '../utils'

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
    averageRating,
    reviews,
  } = restaurant

  return (
    <Container>
      <Heading2>{name}</Heading2>

      <P>Cuisine: {cuisine}</P>
      <P>Location: {restaurantLocation}</P>
      <P>Average Ratings: {renderStarRating(averageRating)}</P>

      <P>Reviews:</P>
      <P>
        {reviews?.map((review: string, index: number) => (
          <ReviewItem key={index}>{review}</ReviewItem>
        ))}
      </P>

      <BackButton to={PATHS.RESTAURANTS}>Back</BackButton>
    </Container>
  )
}

export default RestaurantDetails
