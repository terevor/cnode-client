import { PAGECHANGE } from '../constants';

export const changePage = (page) => ({
    type: PAGECHANGE,
    payload: {
    	currPage: page
    }
});