const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay');
// console.log(jokes);

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.underline.red);
});

// npm link cowsay
// npm i -g 