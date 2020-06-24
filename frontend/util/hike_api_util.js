export const fetchHike = hikeId => {
    return $.ajax({
        url: `/api/hikes/${hikeId}`,
        method: "GET"
    })
}