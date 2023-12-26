import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../utils';
import {
    RestaurantReviewContainer as Container,
    RestaurantReviewForm as Form,
    Heading2,
    RestaurantReviewLabel as Label,
    RestaurantReviewTextArea as TextArea,
    RestaurantReviewCharCount as CharCount,
    ButtonsContainer,
    ActionButton as SubmitReviewButton,
    BackButton,
    RestaurantReviewNumberInput as NumberInput,
} from '../styles';
import Restaurant from '../models/Restaurant';
import { useStore } from '../state/store';

const RestaurantReview: React.FC<{}> = () => {
    const [reviewText, setReviewText] = useState<string>('');
    const [rating, setRating] = useState<number>(1);

    const location = useLocation();
    const restaurant = location.state?.restaurant as Restaurant;
    const restaurantName = restaurant?.name as string;

    const navigate = useNavigate();
    const addReview = useStore((state) => state.addReview);

    const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(e.target.value);
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(parseFloat(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // submit the review via the store
        addReview(restaurant.id, reviewText, rating);

        // navigate back to the restaurant list page
        const restaurantWithNewReview = {
            ...restaurant,
            reviews: [...(restaurant.reviews || []), reviewText],
            ratings: [...(restaurant.ratings || []), rating],
        };
        navigate(`${PATHS.RESTAURANTS}/${restaurant.id}`, {
            state: {
                restaurant: restaurantWithNewReview,
            },
        });
    };

    return (
        <Container>
            <Heading2>Restaurant Review</Heading2>
            <p>Review for: {restaurantName}</p>

            <Form onSubmit={handleSubmit}>
                <Label htmlFor="review">
                    Write your review here (max 500 characters):
                </Label>

                <TextArea
                    id="review"
                    name="review"
                    value={reviewText}
                    onChange={handleReviewChange}
                    maxLength={500}
                    rows={5}
                    required
                />

                <CharCount>
                    Characters left: {500 - reviewText.length}
                </CharCount>

                <Label htmlFor="rating">Rating:</Label>
                <NumberInput
                    type="number"
                    min="1"
                    max="5"
                    step="0.5"
                    value={rating}
                    onChange={handleRatingChange}
                />

                <ButtonsContainer>
                    <SubmitReviewButton type="submit">
                        Submit Your Review
                    </SubmitReviewButton>
                    <BackButton
                        to={`${PATHS.RESTAURANTS}/${restaurant.id}`}
                        state={{
                            restaurant: restaurant,
                        }}
                    >
                        Back to {restaurant.name}
                    </BackButton>
                </ButtonsContainer>
            </Form>
        </Container>
    );
};

export default RestaurantReview;
