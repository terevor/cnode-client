import { PAGECHANGE } from '../constants';

const defaultState = {
    currPage: 1
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case PAGECHANGE:
            return {
                ...state,
                currPage: payload.currPage
            };

        default:
            return state;
    }
};

export default reducer;