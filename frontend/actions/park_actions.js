import * as ParkAPIUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";

const receivePark = payload => {
    return {
        type: RECEIVE_PARK,
        payload
    };
};

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
        .then(payload => dispatch(receivePark(payload)));
}