import styled from 'styled-components';

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
