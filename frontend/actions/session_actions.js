import * as SessionAPIUtil from "../util/session_api_util";
import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};
const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)));
};

export const updateUser = user => dispatch => {
    return UserAPIUtil.updateUser(user)
        .then(updatedUser => dispatch(receiveCurrentUser(updatedUser)));
};