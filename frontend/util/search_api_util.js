export const textSearch = (queryStr) => {
    return $.ajax({
        url: `/api/searches?query=${queryStr}`,
        method: 'GET'
    })
}