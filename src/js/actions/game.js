export function generateCardVectors(vectors){
  return {
    type: 'CARDS_OBJECT',
    payload: vectors
  }
}

export function startNewGame(status){
  return {
    type: 'START_GAME',
    payload: status
  }
}

export function updateScore(score){
  return {
    type: (score==1?'INCREASE_SCORE':'DECREASE_SCORE'),
    payload: score
  }
}
