'use strict';

// EXAMPLES
// spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
// spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
// spanishSentence(undefined) //should 'Give me arrays only! Por favor!'

function spanishSentence (arg) {
  if (!Array.isArray(arg)) return 'Give me arrays only! Por favor!';
  if (arg.length === 0) return '¡0 spanish sentences here!';
  /* Write your code heeeeeere */
  let n = 0;
  arg.forEach(e => {
    if ((e.includes('¡') && e.includes('!')) || (e.includes('¿') && e.includes('?'))) n++;
  });
  return n > 1 ? `¡${n} spanish sentences here!`: `¡${n} spanish sentence here!`;
}


module.exports = spanishSentence;
