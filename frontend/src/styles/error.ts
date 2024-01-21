import styled from 'styled-components';

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
