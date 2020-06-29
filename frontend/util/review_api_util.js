export const fetchReviews = (contentType, id) => {
    return $.ajax({
        url: `/api/${contentType}/${id}/reviews`,
        method: "GET"
    });
};

export const createReview = review => {
    return $.ajax({
        url: `/api/reviews`,
        method: "POST",
        data: { review }
    });
};

export const updateReview = review => {
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: "PATCH",
        data: { review }
    });
};

export const deleteReview = reviewId => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: "DELETE"
    })
}

