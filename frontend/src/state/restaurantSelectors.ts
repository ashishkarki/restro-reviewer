import { AppState, useStore } from './store'

export const useGetAllRestaurants = () =>
  useStore((state: AppState) => state.restaurants)
