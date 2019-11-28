'use strict';

// EXAMPLES
// spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
// spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
// spanishSentence(undefined) //should 'Give me arrays only! Por favor!'

function spanishSentence (arg) {
  const plural = 's';
  if (!Array.isArray(arg)) return 'Give me arrays only! Por favor!';
  else {
    let counter = 0;
    const upsideDownQuestionMark = '¿';
    const upsideDownExclamationMark = '¡';
    for (let i = 0; i < arg.length; i++) {
      let word = arg[i];
      if (word[0] === upsideDownQuestionMark && word[arg[i].length - 1] === '?' || word[0] === upsideDownExclamationMark && word[arg[i].length - 1] === '!') counter++

    }
    if (counter === 1) return `¡${counter} spanish sentence here!`;
    else return `¡${counter} spanish sentences here!`;
  }
  /* Write your code heeeeeere */

}


module.exports = spanishSentence;
