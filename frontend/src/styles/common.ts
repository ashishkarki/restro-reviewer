import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
