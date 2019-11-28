'use strict';

// EXAMPLES
// spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
// spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
// spanishSentence(undefined) //should 'Give me arrays only! Por favor!'

function spanishSentence (arg) {
let count = 0;
for(let sentence of arg) {
  if(sentence.charCodeAt(0) === 161 || sentence.charCodeAt(0) === 191) {
    count++;
  }
}
 return `¡${count} spanish sentences here!` 
}

module.exports = spanishSentence;

spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
