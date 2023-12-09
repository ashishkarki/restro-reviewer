import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

import { GlobalStyles } from './styles'
import Home from './components/Home'
import RestaurantList from './components/RestaurantList'
import RestaurantDetails from './components/RestaurantDetails'
import RestaurantReview from './components/RestaurantReview'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/restaurants' element={<RestaurantList />} />

          <Route path='/restaurants/:id' element={<RestaurantDetails />} />

          <Route
            path='/review'
            element={<RestaurantReview restaurantName='The Fancy Fork' />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
