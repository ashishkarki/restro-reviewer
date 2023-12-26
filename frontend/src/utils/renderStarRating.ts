export const renderStarRating = (rating: number) => {
    const starCount = Math.floor(rating);
    const hasHalfStar = rating - starCount > 0.5;
    const starRating = [];

    // render full stars
    for (let i = 0; i < starCount; i++) {
        starRating.push('⭐️');
    }

    // render half star if necessary
    if (hasHalfStar) {
        starRating.push('⭐️');
    }

    return starRating.join('');
};
