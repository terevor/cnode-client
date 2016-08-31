import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/login.action';
import initState from 'STORE/initState';

export default createReducer(initState.login, ACTION_HANDLERS);