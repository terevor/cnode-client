// ================================
// Action Type
// ================================
const SHOWSNACKBAR = 'SHOWSNACKBAR';
const HIDESNACKBAR = 'HIDESNACKBAR';

// ================================
// Action Creator
// ================================
const showSnackBar = (message) => ({
    type: SHOWSNACKBAR,
    payload: {
        message: message
    }
});

const hideSnackBar = () => ({
    type: HIDESNACKBAR
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
    [SHOWSNACKBAR]: (state, { payload }) => ({
        ...state,
        show: true,
        message: payload.message
    }),
    [HIDESNACKBAR]: (state) =>( {
        ...state,
        show: false,
        message: ''
    })
}