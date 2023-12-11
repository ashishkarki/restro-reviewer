interface Restaurant {
  id: number
  name: string
  cuisine: string
  location?: string
  reviews?: string[]
  ratings?: number[]
  averageRating?: number
}

export default Restaurant
