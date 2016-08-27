import { SHOWPROGRESS, HIDEPROGRESS } from '../constants';

export const showProgress = () => ({
    type: SHOWPROGRESS
});

export const hideProgress = () => ({
    type: HIDEPROGRESS
});