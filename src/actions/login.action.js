import message from '../constants';
import loading from './loading.action';
import snackbar from './snackbar.action';
import http from 'UTIL/http';

// ================================
// Action Type
// ================================
const OPEN_LOGIN = 'OPEN_LOGIN';
const CLOSE_LOGIN = 'CLOSE_LOGIN';
const LOGIN_INPUT_ERROR = 'LOGIN_INPUT_ERROR';
const VALIDATE_SUCCESS = 'VALIDATE_SUCCESS';
const LOGOUT = 'LOGOUT';

// ================================
// Action Creator
// ================================
/**
 * 打开登录框
 * @return {[type]} [description]
 */
const openLogin = () => ({
    type: OPEN_LOGIN
})
/**
 * 关闭登录框
 * @return {[type]} [description]
 */
const closeLogin = () => ({
    type: CLOSE_LOGIN
})
/**
 * 登录input输入异常提示
 * @param  {[type]} errorText [description]
 * @return {[type]} [description]
 */
const loginInputError = (errorText = '') => ({
    type: LOGIN_INPUT_ERROR,
    payload: {
        errorText: errorText
    }
})
/**
 * 验证成功
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const validateSuccess = (data) => ({
    type: VALIDATE_SUCCESS,
    payload: {
        user: data
    }
})
/**
 * 注销
 * @return {[type]} [description]
 */
export const logout = () => ({
    type: LOGOUT
})

const checkLogin = () => {
    return (dispatch) => {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if(user && user.accesstoken) {
            return dispatch(validateSuccess(user));
        }
        return null;
    }
}

const validateAccessToken = (token) => {
    return (dispatch) => {
        dispatch(loading.showLoading());

        return http.post('https://cnodejs.org/api/v1/accesstoken', {
            accesstoken: token
        })
        .then((response) => {
            dispatch(loading.hideLoading());

            if (response.status >= 400) {
                dispatch(snackbar.showSnackBar(message.INFO_LOGIN_FAIL));
                return null;
            }
            return response.json();
        })
        .then((data) => {
            if (data) {
                dispatch(closeLogin());
                dispatch(snackbar.showSnackBar(message.INFO_LOGIN_SUCCESS));

                const user = { ...data, accesstoken: token };

                window.localStorage.setItem('user', JSON.stringify(user));
                
                return dispatch(validateSuccess(user));
            } else {
                return null;
            }
        });
    };
}

/* default 导出所有 Action Creators */
export default {
    openLogin,
    closeLogin,
    loginInputError,
    validateSuccess,
    logout,
    checkLogin,
    validateAccessToken
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [OPEN_LOGIN]: (state) => ({
        ...state,
        showLogin: true,
        errorText: null
    }),
    [CLOSE_LOGIN]: (state) => ({
        ...state,
        showLogin: false
    }),
    [LOGIN_INPUT_ERROR]: (state, { payload }) => ({
        ...state,
        errorText: payload.errorText
    }),
    [VALIDATE_SUCCESS]: (state, { payload }) =>( {
        ...state,
        user: payload.user,
        isLogedin: true
    }),
    [LOGOUT]: (state) => ({
        ...state,
        user: {},
        isLogedin: false
    })
}