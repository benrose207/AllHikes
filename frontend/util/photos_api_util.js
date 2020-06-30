export const createPhotos = photos => {
    return $.ajax({
        url: `/api/photos`,
        method: "POST",
        data: photos,
        contentType: false,
        processData: false
    })
}