'use strict';
/*eslint-disable no-undef*/

require('chai').should();

const spanishSentence = require('../index.js');

const mockObj = {
  array: ['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!'],
  array1: ['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!'],
  array2: ['Looks great?', '¿How are you?',  '¡De Nada!', '¡Looks great!', 'You are awesome!'],
  array3: ['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!'],
  array4: ['¡No tan bien!', '¡De Nada!',  'Muy bien', '¡De Nada!', '¿Qué tal?'],
  array5: ['How are you?', 'It is you', '¡It is you', '¡You are awesome!'],
  array6: [],
  array7: ['¿How are you?', '¿How are you?', '¿How are you?','¿How are you?', '¡How are you!', '¿How are you?'],
  nothing : undefined,
  obj: {},
  nr: 123,
  str: '¡Muy bien!',
}



describe('spanishSentence function should return sentences', () => {

  it('Should return 2 spanish "sentences"', () => {
    spanishSentence(mockObj.array).should.equal('¡2 spanish sentences here!');
  })

  it('Should return 3 spanish "sentences"', () => {
    spanishSentence(mockObj.array1).should.equal('¡3 spanish sentences here!');
  })

  it('Should return 3 spanish "sentences"', () => {
    spanishSentence(mockObj.array2).should.equal('¡3 spanish sentences here!');
  })

  it('Should return 2 spanish "sentences"', () => {
    spanishSentence(mockObj.array3).should.equal('¡2 spanish sentences here!');
  })

  it('Should return 4 spanish "sentences"', () => {
    spanishSentence(mockObj.array4).should.equal('¡4 spanish sentences here!');
  })

  it('Should return 1 spanish "sentence"', () => {
    spanishSentence(mockObj.array5).should.equal('¡1 spanish sentence here!');
  })

  it('Should return 0 spanish "sentences"', () => {
    spanishSentence(mockObj.array6).should.equal('¡0 spanish sentences here!');
  })

  it('Should return 6 spanish "sentences"', () => {
    spanishSentence(mockObj.array7).should.equal('¡6 spanish sentences here!');
  })
})

describe('Function should only accept arrays', () => {
  
  it('Should not accept objects', () => {
    spanishSentence(mockObj.obj).should.equal('Give me arrays only! Por favor!');
  })

  it('Should not accept undefined', () => {
    spanishSentence(mockObj.nothing).should.equal('Give me arrays only! Por favor!');
  })

  it('Should not accept numbers', () => {
    spanishSentence(mockObj.nr).should.equal('Give me arrays only! Por favor!');
  })

  it('Should not accept strings', () => {
    spanishSentence(mockObj.str).should.equal('Give me arrays only! Por favor!');
  })
})





