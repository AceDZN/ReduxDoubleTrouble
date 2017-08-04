import { combineReducers } from 'redux';
import VectorReducer from './vectors';
import gameStatus from './game-status';
import ActiveVectorReducer from './active-vector';
import CardsReducer from './cards-reducer';
import ScoreReducer from './score-reducer';



const rootReducer = combineReducers({
  gameStatus: gameStatus,
  vectors: VectorReducer,
  activeVector: ActiveVectorReducer,
  cards: CardsReducer,
  currentScore: ScoreReducer
});

export default rootReducer;
