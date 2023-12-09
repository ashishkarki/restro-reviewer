import { ReactElement } from 'react'

import {
  Heading2,
  Heading3,
  RestaurantListContainer as Container,
  RestaurantList as List,
  RestaurantListItem as ListItem,
} from '../styles'
import { sampleRestaurants } from '../sampleData'
import { Link } from 'react-router-dom'

/**
 * Renders a list of restaurants.
 *
 * @return {ReactElement} The list of restaurants as a React element.
 */
const RestaurantList: React.FC = (): ReactElement => {
  // TODO: fetch restro data using graphql queries
  const restros = sampleRestaurants

  // Display the list of restros
  return (
    <Container>
      <Heading2>Retros in your area</Heading2>
      {/* display a list of restros using some hardcoded data */}

      <Heading3>Retros in your area</Heading3>

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
