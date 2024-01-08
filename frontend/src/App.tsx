import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { GlobalStyles } from './styles';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantReview from './components/RestaurantReview';
import NavBar from './components/NavBar';
import { PATHS } from './utils';
import { intializeConfig } from './config';
import LoadingIndicator from './components/LoadingIndicator';

const App: React.FC = () => {
    const [isConfigLoaded, setIsConfigLoaded] = useState(false);

    useEffect(() => {
        intializeConfig().then(() => setIsConfigLoaded(true));
    }, []);

    if (!isConfigLoaded) {
        return <LoadingIndicator />;
    }

    return (
        <>
            <GlobalStyles />

            <Router>
                <NavBar />

                <Routes>
                    <Route path={PATHS.HOME} element={<Home />} />

                    <Route
                        path={PATHS.RESTAURANTS}
                        element={<RestaurantList />}
                    />

                    <Route
                        path={PATHS.RESTAURANT_DETAILS}
                        element={<RestaurantDetails />}
                    />

                    <Route path={PATHS.REVIEW} element={<RestaurantReview />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
