import Location from './Location';

interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    location?: Location;
    reviews?: string[];
    ratings?: number[];
    averageRating?: number;
}

export default Restaurant;
