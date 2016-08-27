import {
    FETCHTOPICSUCCESS
} from '../constants';
import * as message from '../constants/message';
import * as http from '../utils/http';
import * as progress from './progress.action';
import * as snackbar from './snackbar.action';

const DEFAULT_PARAMS = { tab: 'all', page: 1 };

const fetchTopicSuccess = (data) => ({
    type: FETCHTOPICSUCCESS,
    payload: {
        topics: data
    }
});

export const fetchTopicList = (params) => {
    
    return (dispatch) => {
        dispatch(progress.showProgress());

        let p = { ...DEFAULT_PARAMS, ...params };
        //dispatch(paginationAction.changePage(p.page));

        return http.get(`https://cnodejs.org/api/v1/topics?mdrender=true&tab=${p.tab}&page=${p.page}`)
            .then((response) => {
                dispatch(progress.hideProgress());

                if (response.status >= 400) {
                    dispatch(snackbar.showSnackBar(message.INFO_FETCHTOPICFAIL));
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    dispatch(snackbar.showSnackBar(message.INFO_FETCHTOPICSUCCESS));

                    return dispatch(fetchTopicSuccess(data));
                } else {
                    return null;
                }
            });
    };
};