// ================================
// Action Type
// ================================
const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

// ================================
// Action Creator
// ================================
const showSidebar = () => ({
    type: SHOW_SIDEBAR
});

const hideSidebar = () => ({
    type: HIDE_SIDEBAR
});

/* default 导出所有 Action Creators */
export default {
    showSidebar,
    hideSidebar
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [SHOW_SIDEBAR]: (state) => ({
        ...state,
        show: true
    }),
    [HIDE_SIDEBAR]: (state) => ({
        ...state,
        show: false
    })
}