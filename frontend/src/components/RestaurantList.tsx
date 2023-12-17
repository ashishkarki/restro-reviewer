import { ReactElement, useEffect, useMemo, useState } from 'react'

import {
  Heading2,
  RestaurantListContainer as Container,
  RestaurantList as List,
  RestaurantListItem as ListItem,
} from '../styles'
import { Link } from 'react-router-dom'
import { useGetAllRestaurants } from '../state/storeSelectors'
import { useStore } from '../state/store'
import ErrorPage from './ErrorPage'

/**
 * Renders a list of restaurants.
 *
 * @return {ReactElement} The list of restaurants as a React element.
 */
const RestaurantList: React.FC = (): ReactElement => {
  // const restaurants = useGetAllRestaurants()
  const { restaurants, loading, error, getRestaurants } = useStore()

  useEffect(() => {
    getRestaurants()
  }, [getRestaurants])

  if (loading) {
    // Render loading state
    return <div>Loading...</div>
  }

  if (error) {
    // Render error state
    return <ErrorPage error={error} />
  }

  // Display the list of restros
  return (
    <Container>
      <Heading2>Retros in your area</Heading2>

      <List>
        {restaurants.map((restro) => (
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
