import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import React from 'react'
import Home from './components/Home'
import RestaurantList from './components/RestaurantList'
import RestaurantDetails from './components/RestaurantDetails'
import RestaurantReview from './components/RestaurantReview'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/restaurants' element={<RestaurantList />} />

        <Route
          path='/restaurants/:id'
          element={
            <RestaurantDetails
              restaurant={{
                id: 1,
                name: 'The Fancy Fork',
                cuisine: 'French',
              }}
            />
          }
        />

        <Route
          path='/review'
          element={<RestaurantReview restaurantName='The Fancy Fork' />}
        />
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App
