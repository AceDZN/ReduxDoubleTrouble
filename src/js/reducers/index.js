import { combineReducers } from 'redux';
import VectorReducer from './vectors';
import ActiveVectorReducer from './active-vector';

const rootReducer = combineReducers({
  vectors: VectorReducer,
  activeVector: ActiveVectorReducer
});

export default rootReducer;
