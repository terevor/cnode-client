import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/snackbar.action';
import initState from 'STORE/initState';

export default createReducer(initState.snackbar, ACTION_HANDLERS);