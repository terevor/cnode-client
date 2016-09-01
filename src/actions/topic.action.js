import * as message from '../constants';
import * as http from 'UTIL/http';
import loading from './loading.action';
import snackbar from './snackbar.action';
import pagination from './pagination.action';

// ================================
// Action Type
// ================================
const FETCHTOPICSUCCESS = 'FETCHTOPICSUCCESS';

const DEFAULT_PARAMS = { tab: 'all', page: 1 };

// ================================
// Action Creator
// ================================
const fetchTopicSuccess = (data) => ({
    type: FETCHTOPICSUCCESS,
    payload: {
        topics: data
    }
});

const fetchTopicList = (params = {}) => {
    
    return (dispatch) => {
        dispatch(loading.showLoading());

        let p = { ...DEFAULT_PARAMS, ...params };

        return http.get(`https://cnodejs.org/api/v1/topics?mdrender=true&tab=${p.tab}&page=${p.page}`)
            .then((response) => {
                dispatch(loading.hideLoading());

                if (response.status >= 400) {
                    dispatch(snackbar.showSnackBar(message.INFO_FETCHTOPICFAIL));
                    return null;
                }
                return response.json();
            })
            .then((json) => {
                if (json) {
                    dispatch(snackbar.showSnackBar(message.INFO_FETCHTOPICSUCCESS));
                    dispatch(pagination.changePage(p.page));

                    return dispatch(fetchTopicSuccess(json.data));
                } else {
                    return null;
                }
            });
    };
};

/* default 导出所有 Action Creators */
export default {
    fetchTopicList
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [FETCHTOPICSUCCESS]: (state, { payload }) => ({
        ...state,
        topics: payload.topics
    })
}