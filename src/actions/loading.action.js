// ================================
// Action Type
// ================================
const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';

// ================================
// Action Creator
// ================================
const showLoading = () => ({
    type: SHOW_LOADING
});

const hideLoading = () => ({
    type: HIDE_LOADING
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
    [SHOW_LOADING]: (state) => ({
        ...state,
        show: true
    }),
    [HIDE_LOADING]: (state) =>( {
        ...state,
        show: false
    })
}