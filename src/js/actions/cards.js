export function generateCardVectors(vectors){
  return {
    type: 'CARDS_OBJECT',
    payload: vectors
  }
}

export function updateScore(score){
  return {
    type: (score==1?'INCREASE_SCORE':'DECREASE_SCORE'),
    payload: score
  }
}
