import createReducer from 'UTIL/createReducer';
import { ACTION_HANDLERS } from 'ACTION/topic.action';
import initState from 'STORE/initState';

export default createReducer(initState.topic, ACTION_HANDLERS);