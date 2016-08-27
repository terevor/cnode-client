import { SHOWSNACKBAR, HIDESNACKBAR } from '../constants';

const defaultState = {
    show: false,
    message: ''
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case SHOWSNACKBAR:
            return {
                ...state,
                show: true,
                message: payload.message
            };
        case HIDESNACKBAR:
            return {
                ...state,
                show: false,
                message: payload.message
            };
        default:
            return state;
    }
};

export default reducer;