export const hikeTags = (state, hikeId) => {
    const taggable = Object.values(state.entities.taggable);
    const hikeTaggable = taggable.filter(tagRef => (
        tagRef.taggableId === hikeId && tagRef.taggableType === "Hike")
    )
    return hikeTaggable.map(tagRef => state.entities.tags[tagRef.tagId]);
};