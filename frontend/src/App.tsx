import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { GlobalStyles } from './styles';
import Home from './components/home';
import RestaurantList from './components/restaurant-list';
import RestaurantDetails from './components/restaurant-details';
import RestaurantReview from './components/restaurant-review';
import NavBar from './components/navbar';
import { PATHS } from './utils';
import { intializeConfig } from './config';
import LoadingIndicator from './components/loading-indicator';
import { RestroReviewerAuthenticator as Authenticator } from './components/auth';

const App: React.FC = () => {
    const [isConfigLoaded, setIsConfigLoaded] = useState(false);

    useEffect(() => {
        intializeConfig().then(() => setIsConfigLoaded(true));
    }, []);

    if (!isConfigLoaded) {
        return <LoadingIndicator />;
    }

    return (
        <Authenticator>
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
        </Authenticator>
    );
};

export default App;
