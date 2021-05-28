import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import tableReducer from './slices/tableSlice';

const reducers = combineReducers({
  table: tableReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
