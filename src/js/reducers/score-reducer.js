// state arg. is not application state - only state this reducer responsible for.
export default function(state = 0, action){
  switch(action.type){
    case 'INCREASE_SCORE':
      return state + 1;
      break;
    case 'DECREASE_SCORE':
      return (state>0 ? state - 1 : 0);
      break;
    default:
      return state
  }
}
