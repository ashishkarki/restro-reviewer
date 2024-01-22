import { ApolloError } from '@apollo/client';

import { SetState } from '../../types';
import apolloClient from '../../graphql/apolloClient';
import {
    GET_ALL_RESTAURANTS,
    GET_RESTAURANT_BY_ID,
} from '../../graphql/restaurant.queries';
import { ADD_REVIEW_MUTATION } from '../../graphql/review.queries';
import { RestaurantState } from '../stores/restaurantStore';

export async function getRestaurants(set: SetState<any>) {
    set({ loading: true, error: null });

    try {
        const { data } = await apolloClient.query({
            query: GET_ALL_RESTAURANTS,
        });

        set({
            restaurants: data.restaurants,
            loading: false,
            error: null,
        });
    } catch (error) {
        console.error(`Error fetching restaurants: ${error}`);

        set({ restaurants: [], loading: false, error: error as ApolloError });
    }
}

export async function getRestaurantById(id: number, set: SetState<any>) {
    set({ loading: true, error: null });

    try {
        const { data } = await apolloClient.query({
            query: GET_RESTAURANT_BY_ID,
            variables: { id },
        });

        set({ restaurantById: data.restaurant, loading: false });
        // return data.restaurant;
    } catch (error) {
        console.error(`Error fetching restaurant: ${error}`);

        set({
            restaurantId: null,
            error: error as ApolloError,
            loading: false,
        });
    }
}

export async function addReview(
    restaurantId: number,
    reviewText: string,
    rating: number,
    set: SetState<any>,
) {
    set({ loading: true, error: null });

    try {
        await apolloClient.mutate({
            mutation: ADD_REVIEW_MUTATION,
            variables: {
                restaurantId,
                reviewText,
                rating,
            },
        });

        // Update local state to reflect new review, or refetch query
        set((state: RestaurantState) => ({
            restaurants: state.restaurants.map((restaurant) => {
                if (restaurant.id === restaurantId) {
                    // Assuming your Restaurant model has a reviews field that you want to update
                    return {
                        ...restaurant,
                        reviews: [
                            ...(restaurant.reviews || []),
                            { reviewText, rating },
                        ],
                    };
                } else {
                    return restaurant;
                }
            }),
            loading: false,
        }));
    } catch (error) {
        console.error(`Error adding review: ${error}`);

        set({ error: error as ApolloError, loading: false });
    }
}
