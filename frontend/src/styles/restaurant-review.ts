import styled from 'styled-components';

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
