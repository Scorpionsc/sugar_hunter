import { combineReducers } from 'redux';
import settings from '../components/common/reducers'

export const rootReducer = combineReducers({
    settings: settings
});
