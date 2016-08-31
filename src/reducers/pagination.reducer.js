import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/pagination.action';
import initState from 'STORE/initState';

export default createReducer(initState.pagination, ACTION_HANDLERS);