import {
    OPENLOGIN,
    CLOSELOGIN,
    LOGININPUTERROR,
    ACCESSSUCCESS,
    LOGOUT
}
from '../constants';

const defaultState = {
    openLogin: false,
    isLogedin: false,
    errorText: null,
    user: {},
    showSnackbar: false,
    message: ''
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case CLOSELOGIN:
            return {
                ...state,
                openLogin: false
            };
        case OPENLOGIN:
            return {
                ...state,
                openLogin: true,
                errorText: null
            };
        case LOGININPUTERROR:
            return {
                ...state,
                errorText: payload.errorText
            };
        case ACCESSSUCCESS:
            return {
                ...state,
                user: payload.user,
                isLogedin: true,
                showSnackbar: true,
                message: payload.message
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                isLogedin: false
            };
        default:
            return state;
    }
};

export default reducer;