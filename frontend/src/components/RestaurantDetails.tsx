import Restaurant from '../models/Restaurant'

interface RestaurantDetailsProps {
  restaurant: Restaurant
}

/**
 * Renders the details of a restaurant.
 *
 * @param {RestaurantDetailsProps} props - The props object containing the restaurant details.
 * @return {ReactNode} The rendered details of the restaurant.
 */
const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Location: {restaurant.location}</p>
      <p>Ratings: {restaurant.ratings}</p>
      <p>Reviews:</p>
      <ul>
        {restaurant.reviews?.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantDetails
