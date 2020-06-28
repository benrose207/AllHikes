export const hikeTags = (state, hikeId) => {
    const taggable = Object.values(state.entities.taggable);
    const hikeTaggable = taggable.filter(tagRef => (
        tagRef.taggableId === parseInt(hikeId) && tagRef.taggableType === "Hike")
    )

    const tags = hikeTaggable.map(tagRef => state.entities.tags[tagRef.tagId]);
    return tags;
};

export const filteredTagsByType = (state, tagType) => {
    return Object.values(state.entities.tags).filter(tag => tag.tagType === tagType)
}

export const defaultActivity = (state) => {
    const activity = Object.values(state.entities.tags).find(tag => tag.name === "hiking")
    return activity.id
}