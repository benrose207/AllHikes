export const hikeTags = (state, hikeId) => {
    const taggable = Object.values(state.entities.taggable);
    const hikeTaggable = taggable.filter(tagRef => (
        tagRef.taggableId === parseInt(hikeId) && tagRef.taggableType === "Hike")
    )

    const tags = hikeTaggable.map(tagRef => state.entities.tags[tagRef.tagId]);
    return tags;
};