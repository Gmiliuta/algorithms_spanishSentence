'use strict';

// EXAMPLES
// spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
// spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
// spanishSentence(undefined) //should 'Give me arrays only! Por favor!'

function spanishSentence (arg) {
  
  /* Write your code heeeeeere */
  if (!Array.isArray(arg)) return 'Give me arrays only! Por favor!';
  let counter = 0;
  for (let i = 0; i < arg.length; i++){
    if ((arg[i][0] === '¿' && arg[i][arg[i].length-1] === '?') || (arg[i][0] === '¡' && arg[i][arg[i].length-1] === '!')) counter++;
  }
  return counter === 1 ? `¡${counter} spanish sentence here!` : `¡${counter} spanish sentences here!`;
}


module.exports = spanishSentence;
