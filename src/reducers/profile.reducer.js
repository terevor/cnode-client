import {
    SHOWPROFILE,
    HIDEPROFILE
} from '../constants';

const defaultState = {
    show: false
};

const reducer = (state = defaultState, { type }) => {
    switch (type) {
        case SHOWPROFILE:
            return {
                ...state,
                show: true
            };
        case HIDEPROFILE:
            return {
                ...state,
                show: false
            };

        default:
            return state;
    }
};

export default reducer;