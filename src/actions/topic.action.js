import {
    FETCHTOPICSUCCESS
} from '../constants';
import * as message from '../constants/message';
import * as http from '../utils/http';
import * as progress from './progress.action';
import * as snackbar from './snackbar.action';
import * as pagination from './pagination.action';

const DEFAULT_PARAMS = { tab: 'all', page: 1 };

const fetchTopicSuccess = (data) => ({
    type: FETCHTOPICSUCCESS,
    payload: {
        topics: data
    }
});

export const fetchTopicList = (params = {}) => {
    
    return (dispatch) => {
        dispatch(progress.showProgress());

        let p = { ...DEFAULT_PARAMS, ...params };

        return http.get(`https://cnodejs.org/api/v1/topics?mdrender=true&tab=${p.tab}&page=${p.page}`)
            .then((response) => {
                dispatch(progress.hideProgress());

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