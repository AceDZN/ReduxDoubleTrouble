// state arg. is not application state - only state this reducer responsible for.
export default function(state = null, action){
  switch(action.type){
    case 'VECTOR_SELECTED':
      return action.payload;
    default:
      console.log('DEFAULT STATE', action.type);
      return state
  }
}
