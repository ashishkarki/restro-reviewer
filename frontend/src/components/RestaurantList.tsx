import { ReactElement } from 'react'

import Restaurant from '../models/Restaurant'

/**
 * Renders a list of restaurants.
 *
 * @return {ReactElement} The list of restaurants as a React element.
 */
const RestaurantList: React.FC = (): ReactElement => {
  // TODO: fetch restro data using graphql queries

  // Display the list of restros
  const restros: Restaurant[] = [
    { id: 1, name: 'The Fancy Fork', cuisine: 'French' },
    { id: 2, name: 'Sushi Sunset', cuisine: 'Japanese' },
    { id: 3, name: 'Curry Corner', cuisine: 'Indian' },
  ]

  return (
    <div>
      <h2>Retros in your area</h2>
      {/* display a list of restros using some hardcoded data */}

      <h2>Retros in your area</h2>

      <ul>
        {restros.map((restro) => (
          <li
            key={restro.id}
            onClick={() => console.log(restro)}
          >{`${restro.name} - ${restro.cuisine}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantList
