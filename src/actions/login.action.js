import {
    OPENLOGIN,
    CLOSELOGIN,
    LOGININPUTERROR,
    ACCESSSUCCESS,
    LOGOUT
} from '../constants';
import * as message from '../constants/message';
import * as progress from './progress.action';
import * as snackbar from './snackbar.action';
import * as http from '../utils/http';

/**
 * 打开登录dialog
 * @return {[type]} [description]
 */
export const openLogin = () => ({
    type: OPENLOGIN
});
/**
 * 关闭登录dialog
 * @return {[type]} [description]
 */
export const closeLogin = () => ({
    type: CLOSELOGIN
});
/**
 * 登录input输入值异常
 * @param  {[type]} errorText [description]
 * @return {[type]} [description]
 */
export const loginInputError = (errorText = '') => ({
    type: LOGININPUTERROR,
    payload: {
        errorText: errorText
    }
});
/**
 * 验证成功
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const getAccessSuccess = (data) => ({
    type: ACCESSSUCCESS,
    payload: {
        user: data
    }
});
/**
 * 退出
 * @return {[type]} [description]
 */
export const logout = () => ({
    type: LOGOUT
});

export const validateAccessToken = (token) => {
    return (dispatch) => {
        dispatch(progress.showProgress());

        return http.post('https://cnodejs.org/api/v1/accesstoken', {
            accesstoken: token
        })
        .then((response) => {
            dispatch(progress.hideProgress());

            if (response.status >= 400) {
                dispatch(snackbar.showSnackBar(message.INFO_LOGINFAIL));
                return null;
            }
            return response.json();
        })
        .then((data) => {
            if (data) {
                dispatch(closeLogin());
                dispatch(snackbar.showSnackBar(message.INFO_LOGINSUCCESS));

                const user = { ...data, accesstoken: token };
                
                return dispatch(getAccessSuccess(user));
            } else {
                return null;
            }
        });
    };
};