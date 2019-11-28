# ALGO-RITHMS CHALLENGE // Spanish Sentence Wannabe

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/varnebla/mind-the-gap`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/your-github-name/your-repository`.

## 2. Challenge

#### Background

In Spanish, sentences not only end with exclamation and question marks, but also begin with them (actually flipped over version).

It looks like:
¿Cómo estás?      -> How are you?
¡Es maravilloso!  -> It is wonderful!

#### Task

Keeping in mind the above-mentioned fact, your task is to find out how many sentences in unput array are spanish and spanish wannabes and return '¡(n) spanish sentence(s)!'
If input is not an array you have to return 'Give me arrays only! Por favor!'

### 2.1. Examples

```js
spanishSentence(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are awesome!']) // should return '¡2 spanish sentences here!'
spanishSentence(['How are you?', '¡Es maravilloso!',  'It is you', '¡Es maravilloso!', '¡You are awesome!']) // // should return '¡2 spanish sentences here!'
spanishSentence(undefined) //should 'Give me arrays only! Por favor!'
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.

🤘🎉