import * as HikeAPIUtil from "../util/hike_api_util";

export const RECEIVE_HIKE = "RECEIVE_HIKE";

const receiveHike = payload => {
    return {
        type: RECEIVE_HIKE,
        payload
    };
};

export const fetchHike = hikeId => dispatch => {
    return HikeAPIUtil.fetchHike(hikeId)
        .then(payload => dispatch(receiveHike(payload)));
}