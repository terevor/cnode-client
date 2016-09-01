// ================================
// Action Type
// ================================
const SHOWLOADING = 'SHOWLOADING';
const HIDELOADING = 'HIDELOADING';

// ================================
// Action Creator
// ================================
const showLoading = () => ({
    type: SHOWLOADING
});

const hideLoading = () => ({
    type: HIDELOADING
});

/* default 导出所有 Action Creators */
export default {
    showLoading,
    hideLoading
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [SHOWLOADING]: (state) => ({
        ...state,
        show: true
    }),
    [HIDELOADING]: (state) =>( {
        ...state,
        show: false
    })
}