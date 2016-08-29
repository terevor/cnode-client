import {
    SHOWPROGRESS, HIDEPROGRESS
} from '../constants';

const defaultState = {
    show: false
};

const reducer = (state = defaultState, { type }) => {
    switch (type) {
        case SHOWPROGRESS:
            return {
                ...state,
                show: true
            };
        case HIDEPROGRESS:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
};

export default reducer;
