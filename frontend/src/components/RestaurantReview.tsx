interface RestaurantReviewProps {
  restaurantName: string
}

const RestaurantReview: React.FC<RestaurantReviewProps> = ({
  restaurantName,
}) => {
  return (
    <div>
      <h2>Restaurant Review</h2>
      <p>Review for: {restaurantName}</p>

      {/* add sample reviews for this restaurant */}
      <p>Reviews:</p>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </ul>
    </div>
  )
}

export default RestaurantReview
