/*ADFS*/
var card1=[]; var card2=[];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function generateVectors(vectors=[], count=3){
  if(!!vectors){
    var arr = [];
    while(arr.length < count){
      var generated = generateVector(vectors, arr);
      if(!!generated){
        arr.push(generated);
      }
    }
    console.log(arr, "- Cards Array");
    return arr
  }
}

function generateVector(vectors,arr){
  if(!vectors) return;
  var r = Math.floor((Math.random() * vectors.length));
  var gen = vectors[r];
  if((card1.indexOf(gen) == -1) && (card2.indexOf(gen) == -1) && (!arr || arr.indexOf(gen) == -1)){
    return gen
  }
};

function generateCards(vectors, count = 5){
  var p1 = {vectors:[]}; var p2 = {vectors:[]}; var same;
  card1 = generateVectors(vectors,(count-1));
  card2 = generateVectors(vectors,(count-1));
  while(card1.length < count){
    same = generateVector(vectors);
    if(!!same){
      card1.push(same);card2.push(same);
    }
  }
  p1.vectors = shuffle(card1);
  p2.vectors = shuffle(card2);
  return {
    active_card: same,
    card_1: p1,
    card_2: p2
  }
}


// state arg. is not application state - only state this reducer responsible for.
export default function(state=null, action){
  switch(action.type){
    case 'CARDS_OBJECT':
      var cards = generateCards(action.payload);
      return cards
    default:
      console.log('DEFAULT STATE', action.type);
      return state
  }
}
