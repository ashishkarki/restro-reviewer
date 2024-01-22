import { ApolloError } from '@apollo/client';
import Restaurant from '../../models/Restaurant';
import { create } from 'zustand';
import {
    getRestaurantById,
    getRestaurants,
    addReview,
} from '../helpers/restaurantHelpers';

export type RestaurantState = {
    restaurants: Restaurant[];
    restaurantById: Restaurant | null;
    loading: boolean;
    error: ApolloError | null;
    getRestaurants: () => Promise<void>;
    getRestaurantById: (id: number) => Promise<void>;
    addReview: (restaurantId: number, review: string, rating: number) => void;
};

export const useRestaurantStore = create<RestaurantState>((set) => ({
    restaurants: [],
    restaurantById: null,
    loading: false,
    error: null,

    getRestaurants: () => getRestaurants(set),
    getRestaurantById: (id: number) => getRestaurantById(id, set),
    addReview: (restaurantId: number, review: string, rating: number) =>
        addReview(restaurantId, review, rating, set),
}));
