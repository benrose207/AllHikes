export const hikeTags = (state, hikeId) => {
    const taggable = Object.values(state.entities.taggable);
    const hikeTaggable = taggable.filter(tagRef => (
        tagRef.taggableId === parseInt(hikeId) && tagRef.taggableType === "Hike")
    )

    const tags = hikeTaggable.map(tagRef => state.entities.tags[tagRef.tagId]);
    return tags;
};

export const hikeReviews = (state, hikeId) => {
    const reviews = Object.values(state.entities.reviews).filter(review => review.hikeId === parseInt(hikeId));
    const sorted = reviews.sort((review1, review2) => {
        if (review1.activityDate < review2.activityDate) return 1;
        if (review1.activityDate > review2.activityDate) return -1;
        if (review1.activityDate === review2.activityDate) return 0;
    })
    return sorted;
}

export const reviewTags = (state, reviewId) => {
    const taggable = Object.values(state.entities.taggable);
    const reviewTaggable = taggable.filter(tagRef => (
        tagRef.taggableId === parseInt(reviewId) && tagRef.taggableType === "Review"
    ))

    const tags = reviewTaggable.map(tagRef => state.entities.tags[tagRef.tagId]);
    return tags;
}

export const filteredTagsByType = (state, tagType) => {
    return Object.values(state.entities.tags).filter(tag => tag.tagType === tagType);
}

export const defaultActivity = (state) => {
    const activity = Object.values(state.entities.tags).find(tag => tag.name === "hiking");
    return activity.id;
}