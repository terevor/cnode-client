// ================================
// Action Type
// ================================
const SHOWPROGRESS = 'SHOWPROGRESS';
const HIDEPROGRESS = 'HIDEPROGRESS';

// ================================
// Action Creator
// ================================
const showProgress = () => ({
    type: SHOWPROGRESS
});

const hideProgress = () => ({
    type: HIDEPROGRESS
});

/* default 导出所有 Action Creators */
export default {
    showProgress,
    hideProgress
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [SHOWPROGRESS]: (state) => ({
        ...state,
        show: true
    }),
    [HIDEPROGRESS]: (state) =>( {
        ...state,
        show: false
    })
}