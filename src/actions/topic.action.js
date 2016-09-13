import message from '../constants';
import http from 'UTIL/http';
import loading from './loading.action';
import snackbar from './snackbar.action';
import pagination from './pagination.action';

// ================================
// Action Type
// ================================
const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
const TOPIC_DETAIL_SUCCESS = 'TOPIC_DETAIL_SUCCESS';
const COLLECT_TOPIC_SUCCESS = 'COLLECT_TOPIC_SUCCESS';
const CLOSE_TOPIC = 'CLOSE_TOPIC';

const DEFAULT_PARAMS = { tab: 'all', page: 1 };

// ================================
// Action Creator
// ================================
const fetchTopicSuccess = (data) => ({
    type: FETCH_TOPIC_SUCCESS,
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
                    dispatch(snackbar.showSnackBar(message.INFO_FETCH_TOPIC_FAIL));
                    return null;
                }
                return response.json();
            })
            .then((json) => {
                if (json) {
                    dispatch(snackbar.showSnackBar(message.INFO_FETCH_TOPIC_SUCCESS));
                    dispatch(pagination.changePage(p.page));

                    return dispatch(fetchTopicSuccess(json.data));
                } else {
                    return null;
                }
            });
    };
};

const topicDetailSuccess = (data) => ({
    type: TOPIC_DETAIL_SUCCESS,
    payload: {
        topicDetail: data,
        topicDetailCollect: (data ? data.is_collect : false)
    }
});

const fetchTopicDetail = (params = {}) => {
    return (dispatch) => {
        return http.get(`https://cnodejs.org/api/v1/topic/${params.id}?accesstoken=${params.accesstoken}`)
            .then((response) => {
                if (response.status >= 400) {
                    return null;
                }
                return response.json();
            })
            .then((json) => {
                if (json) {
                    return dispatch(topicDetailSuccess(json.data));
                } else {
                    return null;
                }
            });
    };
};

const closeTopic = () => ({
    type: CLOSE_TOPIC
});

const collectTopicSuccess = (collect) => ({
    type: COLLECT_TOPIC_SUCCESS,
    payload: {
        topicDetailCollect: collect
    }
});

const collectTopic = (params = {}) => {
    return (dispatch) => {
        return http.post(`https://cnodejs.org/api/v1/topic_collect/${params.type}`, {
                topic_id: params.id,
                accesstoken: params.accesstoken
            })
            .then((response) => {
                if (response.status >= 400) {
                    return null;
                }
                return response.json();
            })
            .then((json) => {
                if (json && json.success) {
                    return dispatch(collectTopicSuccess(params.type === 'collect'));
                } else {
                    return null;
                }
            });
    };
};

/* default 导出所有 Action Creators */
export default {
    fetchTopicList,
    fetchTopicDetail,
    closeTopic,
    collectTopic
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [FETCH_TOPIC_SUCCESS]: (state, { payload }) => ({
        ...state,
        topics: payload.topics
    }),
    [TOPIC_DETAIL_SUCCESS]: (state, { payload }) => ({
        ...state,
        topicDetail: payload.topicDetail,
        topicDetailCollect: payload.topicDetailCollect
    }),
    [CLOSE_TOPIC]: (state) => ({
        ...state,
        topicDetail: null,
        topicDetailCollect: false
    }),
    [COLLECT_TOPIC_SUCCESS]: (state, { payload }) => ({
        ...state,
        topicDetailCollect: payload.topicDetailCollect
    })
}