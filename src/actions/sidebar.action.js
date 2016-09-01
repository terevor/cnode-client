// ================================
// Action Type
// ================================
const SHOWSIDEBAR = 'SHOWSIDEBAR';
const HIDESIDEBAR = 'HIDESIDEBAR';

// ================================
// Action Creator
// ================================
const showSidebar = () => ({
    type: SHOWSIDEBAR
});

const hideSidebar = () => ({
    type: HIDESIDEBAR
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
    [SHOWSIDEBAR]: (state) => ({
        ...state,
        show: true
    }),
    [HIDESIDEBAR]: (state) => ({
        ...state,
        show: false
    })
}