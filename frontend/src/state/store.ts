import { create } from 'zustand'
import Restaurant from '../models/Restaurant'
import { sampleRestaurants } from '../sampleData'
import apolloClient from '../graphql/apolloClient'
import {
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT_BY_ID,
} from '../graphql/restaurant.queries'
import { ApolloError } from '@apollo/client'

export type AppState = {
  restaurants: Restaurant[]
  loading: boolean
  error: ApolloError | null
  getRestaurants: () => Promise<void>
  getRestaurantById: (id: number) => Promise<Restaurant | undefined>
  addReview: (restaurantId: number, review: string, rating: number) => void
}

export const useStore = create<AppState>((set) => ({
  // initial state
  restaurants: [],
  loading: false,
  error: null,

  // actions to update the state above
  getRestaurants: async () => {
    set({ loading: true, error: null })

    try {
      const { data } = await apolloClient.query({
        query: GET_ALL_RESTAURANTS,
      })

      set({
        restaurants: data.restaurants,
        loading: false,
      })
    } catch (error) {
      console.error(`Error fetching restaurants: ${error}`)
      set({ error: error as ApolloError, loading: false })
    }
  },
  getRestaurantById: async (id: number) => {
    set({ loading: true, error: null })

    try {
      const { data } = await apolloClient.query({
        query: GET_RESTAURANT_BY_ID,
        variables: { id },
      })

      set({
        loading: false,
      })

      return data.restaurant
    } catch (error) {
      console.error(`Error fetching restaurant: ${error}`)
      set({ error: error as ApolloError, loading: false })
    }
  },
  addReview: (restaurantId: number, review: string, rating: number) => {
    set((state) => ({
      restaurants: state.restaurants.map((restaurant) => {
        if (restaurant.id === restaurantId) {
          const newReviews = [...(restaurant.reviews || []), review]
          const newRatings = [...(restaurant.ratings || []), rating]

          const newAverageRating =
            newRatings.reduce((total, rating) => total + rating, 0) /
            newRatings.length

          // normalize the ratings so it is between 1 and 5 inclusive
          const normalizedAverageRating = Math.min(
            Math.max(newAverageRating, 1),
            5
          )

          return {
            ...restaurant,
            reviews: newReviews,
            ratings: newRatings,
            averageRating: normalizedAverageRating,
          }
        } else {
          return restaurant
        }
      }),
    }))
  },
}))
