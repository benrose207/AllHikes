import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = payload => {
    return {
        type: RECEIVE_REVIEWS,
        payload
    };
};

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const fetchUserReviews = userId => dispatch => {
    return ReviewAPIUtil.fetchUserReviews(userId)
        .then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
    return ReviewAPIUtil.createReview(review)
        .then(createdReview => dispatch(receiveReview(createdReview)));
};

export const updateReview = review => dispatch => {
    return ReviewAPIUtil.updateReview(review)
        .then(updatedReview => dispatch(receiveReview(updatedReview)));
};

export const deleteReview = reviewId => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)));
}