import { ReactElement, useEffect } from 'react';

import {
    Heading2,
    RestaurantListContainer as Container,
    RestaurantList as List,
    RestaurantListItem as ListItem,
} from '../../styles';
import { Link } from 'react-router-dom';
import { useStore } from '../../state/store';
import ErrorPage from '../error-page';
import LoadingIndicator from '../loading-indicator';

/**
 * Renders a list of restaurants.
 *
 * @return {ReactElement} The list of restaurants as a React element.
 */
const RestaurantList: React.FC = (): ReactElement => {
    const { restaurants, loading, error, getRestaurants } = useStore();

    useEffect(() => {
        getRestaurants();
    }, [getRestaurants]);

    if (loading) {
        // Render loading state
        return <LoadingIndicator />;
    }

    if (error) {
        // Render error state
        return <ErrorPage error={error} />;
    }

    // Display the list of restros
    return (
        <Container>
            <Heading2>Retros in your area</Heading2>

            <List>
                {restaurants.map((restro) => (
                    <ListItem
                        key={restro.id}
                        onClick={() => console.log(restro)}>
                        <Link
                            to={`/restaurants/${restro.id}`}
                            state={{ restaurant: restro }}>
                            {`${restro.name} - ${restro.cuisine}`}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default RestaurantList;
