export const fetchPark = parkId => {
    return $.ajax({
        url: `/api/parks/${parkId}`,
        method: 'GET'
    })
}