import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// global Styles
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto Serif', serif;
  }
`;

// Common styles
export const Heading1 = styled.h1`
    color: #333;
    font-size: 2rem;
`;

export const Heading2 = styled.h2`
    color: #444;
    font-size: 1.5rem;
`;

export const Heading3 = styled.h3`
    color: #555;
    font-size: 1.2rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

export const BackButton = styled(Link)`
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #555;
    }
`;

export const ActionButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
`;

// Styles for Home.tsx
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #ffffff, #f2f2f2);
`;

export const HomeParagraph = styled.p`
    font-size: 1.2rem;
    color: #777;
    margin-bottom: 20px;
`;

export const HomeLinkStyled = styled.a`
    color: #007bff;
    text-decoration: none;
    margin-right: 5px;
`;

// styles for RestaurantList.tsx
export const RestaurantListContainer = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #ffffff, #f2f2f2);
    padding: 15px;
`;

export const RestaurantList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const RestaurantListItem = styled.li`
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px;

    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

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

export const RestaurantDetailsReviewItem = styled.li`
    margin-bottom: 5px;
    border: 1px solid #ccd; /* Add border for card-like appearance */
    border-radius: 5px; /* Rounded corners for the card */
    padding: 10px; /* Padding for inner content */
`;

// styles for RestaurantReview page
export const RestaurantReviewContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #ffffff, #f2f2f2);

    padding: 15px;
    max-width: 800px;
    margin: 20px auto;
`;

export const RestaurantReviewForm = styled.form`
    margin-top: 20px;
`;

export const RestaurantReviewLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const RestaurantReviewTextArea = styled.textarea`
    width: 90%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
`;

export const RestaurantReviewCharCount = styled.p`
    margin: 5px auto;
    font-size: 0.8rem;
    color: #888;
`;

export const RestaurantReviewBackButton = styled.button`
    padding: 5px 10px;
    background-color: #ccc;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const RestaurantReviewNumberInput = styled.input`
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// styles for Error Page
export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 20px;
    height: 100vh;
`;

export const ErrorMessage = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
`;
