import { SHOWSNACKBAR, HIDESNACKBAR } from '../constants';

/**
 * 开启消息
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const showSnackBar = (message) => ({
    type: SHOWSNACKBAR,
    payload: {
        message: message
    }
});

/**
 * 关闭消息
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const hideSnackBar = () => ({
    type: HIDESNACKBAR,
    payload: {
        message: ''
    }
});