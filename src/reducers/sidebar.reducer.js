import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/sidebar.action';
import initState from 'STORE/initState';

export default createReducer(initState.sidebar, ACTION_HANDLERS);