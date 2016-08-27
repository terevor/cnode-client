import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login.reducer';
import snackbar from './snackbar.reducer';
import profile from './profile.reducer';

const rootReducer = combineReducers({
  login,
  snackbar,
  profile,
  routing
});

export default rootReducer;