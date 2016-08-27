import { SHOWPROFILE, HIDEPROFILE } from '../constants';

export const showProfile = () => ({
    type: SHOWPROFILE
});

export const hideProfile = () => ({
    type: HIDEPROFILE
});