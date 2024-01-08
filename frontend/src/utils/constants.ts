export const PATHS = {
    HOME: '/',
    RESTAURANTS: '/restaurants',
    RESTAURANT_DETAILS: '/restaurants/:id',
    REVIEW: '/review',
};

const API_HOST = process.env.RUNNING_IN_DOCKER
    ? 'backend:4000'
    : 'localhost:4001';
export const API_URL = `http://${API_HOST}/graphql`;
console.log(`API URL: ${API_URL}`);
