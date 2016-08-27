import {
	FETCHTOPICSUCCESS
} from '../constants';

const defaultState = {
    
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case FETCHTOPICSUCCESS:
            return {
                ...state,
                topics: payload.topics
            };

        default:
            return state;
    }
};

export default reducer;
