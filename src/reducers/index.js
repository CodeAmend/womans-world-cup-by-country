import { combineReducers } from 'redux';
import FetchMatchData from './fetch_match_data';

const rootReducer = combineReducers({
  matchData: FetchMatchData
});

export default rootReducer;
