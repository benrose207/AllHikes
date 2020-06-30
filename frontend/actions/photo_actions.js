import * as PhotoAPIUtil from "../util/photos_api_util";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => {
    return {
        type: RECEIVE_PHOTOS,
        photos
    }
}

export const createPhotos = photos => dispatch => {
    return PhotoAPIUtil.createPhotos(photos)
        .then(createdPhotos => dispatch(receivePhotos(createdPhotos)));
}