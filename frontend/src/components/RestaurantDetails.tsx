import {
    RestaurantDetailsContainer as Container,
    RestaurantDetailsParagraph as P,
    RestaurantDetailsReviewItem as ReviewItem,
    Heading2,
    ButtonsContainer,
    BackButton,
    ActionButton as AddReviewButton,
} from '../styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS, renderStarRating } from '../utils';
import Restaurant from '../models/Restaurant';
import { useEffect } from 'react';

/**
 * Renders the details of a restaurant.
 */
const RestaurantDetails: React.FC = () => {
    const location = useLocation();
    const restaurant = location.state?.restaurant as Restaurant;

    const navigate = useNavigate();

    // redirect the user to the restaurant list page if the user navigated
    // directly to this page without going through the restaurant list page
    useEffect(() => {
        if (!restaurant) {
            navigate(PATHS.RESTAURANTS, {
                replace: true,
            });
            window.history.pushState(null, '', PATHS.RESTAURANTS);
        }
    }, [restaurant, navigate]);

    if (!restaurant) {
        return null;
    }

    const {
        name,
        cuisine,
        location: restaurantLocation,
        averageRating,
        reviews,
    } = restaurant;

    const handleAddReviewClick = () => {
        // navigate to post review page
        navigate(PATHS.REVIEW, {
            state: {
                restaurant,
            },
        });
    };

    return (
        <Container>
            <Heading2>{name}</Heading2>

            <P>Cuisine: {cuisine}</P>
            <P>Location: {restaurantLocation}</P>
            <P>
                Average Ratings:{' '}
                {renderStarRating(
                    averageRating !== undefined ? averageRating : 0,
                )}
            </P>

            <P>Reviews:</P>
            <P>
                {reviews?.map((review: string, index: number) => (
                    <ReviewItem key={index}>{review}</ReviewItem>
                ))}
            </P>

            <ButtonsContainer>
                <AddReviewButton type="submit" onClick={handleAddReviewClick}>
                    Add Your Review
                </AddReviewButton>
                <BackButton to={PATHS.RESTAURANTS}>
                    Back to Restaurants
                </BackButton>
            </ButtonsContainer>
        </Container>
    );
};

export default RestaurantDetails;
