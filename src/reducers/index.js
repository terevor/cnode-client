import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login.reducer';
import snackbar from './snackbar.reducer';
import progress from './progress.reducer';
import profile from './profile.reducer';
import topic from './topic.reducer';
import pagination from './pagination.reducer';

const rootReducer = combineReducers({
  login,
  snackbar,
  progress,
  profile,
  topic,
  pagination,
  routing
});

export default rootReducer;