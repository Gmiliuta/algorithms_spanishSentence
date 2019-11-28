'use strict';

// EXAMPLES
// spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
// spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
// spanishSentence(undefined) //should 'Give me arrays only! Por favor!'

function spanishSentence (arg) {
  if (!Array.isArray(arg)) return 'Give me arrays only! Por favor!';
  let count = 0;
  let punct = ['¡', '¿', '!', '?'];
  arg.forEach(elem => {
    if(punct.includes(elem[0]) && punct.includes(elem[elem.length-1])) count++;

  })
  let result;
  if (count == 1) result = `¡${count} spanish sentence here!`;
  else result = `¡${count} spanish sentences here!`;
  return result;
}


module.exports = spanishSentence;
