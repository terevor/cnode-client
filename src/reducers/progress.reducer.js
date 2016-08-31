import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/progress.action';
import initState from 'STORE/initState';

export default createReducer(initState.progress, ACTION_HANDLERS);