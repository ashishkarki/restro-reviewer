import styled from 'styled-components';

// styles for RestaurantDetails
export const RestaurantDetailsContainer = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #ffffff, #f2f2f2);
    padding: 15px;
`;

export const RestaurantDetailsHeading2 = styled.h2`
    color: #333;
    font-size: 1.5rem;
`;

export const RestaurantDetailsParagraph = styled.p`
    color: #555;
    margin-bottom: 10px;
`;

export const RestaurantDetailsAddress = styled.div`
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ccd;
    border-radius: 5px;
    background-color: #e9e9e9;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.5;
`;

export const RestaurantDetailsReviewItem = styled.li`
    margin-bottom: 5px;
    border: 1px solid #ccd; /* Add border for card-like appearance */
    border-radius: 5px; /* Rounded corners for the card */
    padding: 10px; /* Padding for inner content */
`;
