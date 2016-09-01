import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login.reducer';
import snackbar from './snackbar.reducer';
import loading from './loading.reducer';
import sidebar from './sidebar.reducer';
import topic from './topic.reducer';
import pagination from './pagination.reducer';

const rootReducer = combineReducers({
  login,
  snackbar,
  loading,
  sidebar,
  topic,
  pagination,
  routing
});

export default rootReducer;