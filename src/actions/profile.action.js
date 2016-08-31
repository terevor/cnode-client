// ================================
// Action Type
// ================================
const SHOWPROFILE = 'SHOWPROFILE';
const HIDEPROFILE = 'HIDEPROFILE';

// ================================
// Action Creator
// ================================
export const showProfile = () => ({
    type: SHOWPROFILE
});

export const hideProfile = () => ({
    type: HIDEPROFILE
});