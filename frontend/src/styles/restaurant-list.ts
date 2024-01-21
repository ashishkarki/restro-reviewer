import styled from 'styled-components';

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
