export const fetchPark = parkId => {
    return $.ajax({
        url: `/api/parks/${parkId}`,
        method: 'GET'
    });
};

export const fetchParkHikes = (parkId, query) => {
    return $.ajax({
        url: `/api/parks/${parkId}/hikes?${query}`,
        method: 'GET'
    });
};