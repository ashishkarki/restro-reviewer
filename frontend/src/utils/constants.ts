export const PATHS = {
    HOME: '/',
    RESTAURANTS: '/restaurants',
    RESTAURANT_DETAILS: '/restaurants/:id',
    REVIEW: '/review',
};

const API_HOST = process.env.RUNNING_IN_DOCKER
    ? 'dynamodb-local:4000'
    : 'localhost:4001';
export const API_URL = `http://${API_HOST}/graphql`;
