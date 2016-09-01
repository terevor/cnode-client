import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/loading.action';
import initState from 'STORE/initState';

export default createReducer(initState.loading, ACTION_HANDLERS);