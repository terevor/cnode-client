// ================================
// Action Type
// ================================
const PAGECHANGE = 'PAGECHANGE';

// ================================
// Action Creator
// ================================
const changePage = (page) => ({
    type: PAGECHANGE,
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
    [PAGECHANGE]: (state, { payload }) => ({
        ...state,
        currPage: payload.currPage
    })
}