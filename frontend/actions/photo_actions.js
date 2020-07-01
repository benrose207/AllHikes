import * as PhotoAPIUtil from "../util/photos_api_util";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTOS_ERRORS = "RECEIVE_PHOTOS_ERRORS";

const receivePhotos = photos => {
    return {
        type: RECEIVE_PHOTOS,
        photos
    }
}

const receivePhotosErrors = errors => {
    return {
        type: RECEIVE_PHOTOS_ERRORS,
        errors
    }
}

export const createPhotos = photos => dispatch => {
    return PhotoAPIUtil.createPhotos(photos)
        .then(createdPhotos => dispatch(receivePhotos(createdPhotos)))
        .fail(errors => dispatch(receivePhotosErrors(errors.responseJSON)));
}

export const fetchPhotos = (contentType, id) => dispatch => {
    return PhotoAPIUtil.fetchPhotos(contentType, id)
        .then(photos => dispatch(receivePhotos(photos)))
}