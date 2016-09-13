// ================================
// Action Type
// ================================
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

// ================================
// Action Creator
// ================================
const showSnackBar = (message) => ({
    type: SHOW_SNACKBAR,
    payload: {
        message: message
    }
});

const hideSnackBar = () => ({
    type: HIDE_SNACKBAR
});

/* default 导出所有 Action Creators */
export default {
    showSnackBar,
    hideSnackBar
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [SHOW_SNACKBAR]: (state, { payload }) => ({
        ...state,
        show: true,
        message: payload.message
    }),
    [HIDE_SNACKBAR]: (state) =>( {
        ...state,
        show: false,
        message: ''
    })
}