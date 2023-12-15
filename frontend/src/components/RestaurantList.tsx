import { ReactElement, useEffect, useMemo, useState } from 'react'

import {
  Heading2,
  RestaurantListContainer as Container,
  RestaurantList as List,
  RestaurantListItem as ListItem,
} from '../styles'
import { Link } from 'react-router-dom'
import { useGetAllRestaurants } from '../state/storeSelectors'

/**
 * Renders a list of restaurants.
 *
 * @return {ReactElement} The list of restaurants as a React element.
 */
const RestaurantList: React.FC = (): ReactElement => {
  const [restaurantLoaded, setRestaurantLoaded] = useState(false)

  // TODO: fetch restro data using graphql queries
  const restros = useGetAllRestaurants()

  useEffect(() => {
    if (restros) {
      setRestaurantLoaded(true)
    }
  }, [restros])

  if (!restaurantLoaded) {
    // Render loading state
    return <div>Loading...</div>
  }

  // Display the list of restros
  return (
    <Container>
      <Heading2>Retros in your area</Heading2>

      <List>
        {restros.map((restro) => (
          <ListItem key={restro.id} onClick={() => console.log(restro)}>
            <Link
              to={`/restaurants/${restro.id}`}
              state={{ restaurant: restro }}
            >
              {`${restro.name} - ${restro.cuisine}`}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
