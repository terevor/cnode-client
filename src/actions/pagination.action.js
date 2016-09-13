// ================================
// Action Type
// ================================
const PAGE_CHANGE = 'PAGE_CHANGE';

// ================================
// Action Creator
// ================================
const changePage = (page) => ({
    type: PAGE_CHANGE,
    payload: {
    	currPage: page
    }
});

/* default 导出所有 Action Creators */
export default {
    changePage
}

// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
    [PAGE_CHANGE]: (state, { payload }) => ({
        ...state,
        currPage: payload.currPage
    })
}