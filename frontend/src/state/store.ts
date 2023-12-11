import { create } from 'zustand'
import Restaurant from '../models/Restaurant'
import { sampleRestaurants } from '../sampleData'

export type AppState = {
  restaurants: Restaurant[]
  addReview: (restaurantId: number, review: string, rating: number) => void
}

export const useStore = create<AppState>((set) => ({
  // initial state
  restaurants: sampleRestaurants,

  // actions to update the state above

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
