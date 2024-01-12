import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.div`
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid blue;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    animation: ${rotate} 2s linear infinite;
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`;

const LoadingIndicator: React.FC = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    );
};

export default LoadingIndicator;
