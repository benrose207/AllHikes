import * as HikeAPIUtil from "../util/hike_api_util";

export const RECEIVE_HIKE = "RECEIVE_HIKE";

const receiveHike = hike => {
    return {
        type: RECEIVE_HIKE,
        hike
    };
};

export const fetchHike = hikeId => dispatch => {
    return HikeAPIUtil.fetchHike(hikeId)
        .then(hike => dispatch(receiveHike(hike)));
}