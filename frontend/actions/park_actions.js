import * as ParkAPIUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARK_HIKES = "RECEIVE_PARK_HIKES";

const receivePark = payload => {
    return {
        type: RECEIVE_PARK,
        payload
    };
};

const receiveParkHikes = hikes => {
    return {
        type: RECEIVE_PARK_HIKES,
        hikes
    }
}

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
        .then(payload => dispatch(receivePark(payload)));
}

export const fetchParkHikes = (parkId, query) => dispatch => {
    return ParkAPIUtil.fetchParkHikes(parkId, query)
        .then(hikes => dispatch(receiveParkHikes(hikes)));
}