import styled, { createGlobalStyle } from 'styled-components'

// global Styles
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto Serif', serif;
  }
`

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
`

export const Heading1 = styled.h1`
  color: #333;
  font-size: 2rem;
`

export const Heading2 = styled.h2`
  color: #444;
  font-size: 1.5rem;
`

export const Heading3 = styled.h3`
  color: #555;
  font-size: 1.2rem;
`

// styles for RestaurantList.tsx
export const RestaurantListContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #ffffff, #f2f2f2);
  padding: 15px;
`

export const RestaurantList = styled.ul`
  list-style: none;
  padding: 0;
`

export const RestaurantListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;

  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

// styles for RestaurantDetails
export const RestaurantDetailsContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #ffffff, #f2f2f2);
  padding: 15px;
`

export const RestaurantDetailsHeading2 = styled.h2`
  color: #333;
  font-size: 1.5rem;
`

export const RestaurantDetailsParagraph = styled.p`
  color: #555;
  margin-bottom: 10px;
`

export const RestaurantDetailsReviewItem = styled.li`
  margin-bottom: 5px;
  border: 1px solid #ccd; /* Add border for card-like appearance */
  border-radius: 5px; /* Rounded corners for the card */
  padding: 10px; /* Padding for inner content */
`
