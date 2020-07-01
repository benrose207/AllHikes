export const createPhotos = photos => {
    return $.ajax({
        url: `/api/photos`,
        method: "POST",
        data: photos,
        contentType: false,
        processData: false
    })
}

export const fetchPhotos = (contentType, id) => {
    return $.ajax({
        url: `/api/${contentType}/${id}/photos`,
        method: "GET"
    })
}