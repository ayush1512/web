// Try/Catch
// try {
//     hello.toUpperCase()
// } catch {
//     console.log("Error!!!!!")
// }
// p = "hello".toUpperCase();
// console.log(p);
// console.log("After..");
// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log("Please pass a string next time.");
//     }
// }

// forEach()
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// function print(element) {
//     console.log(element);
// }    
// print(numbers[0]);
// print(numbers[1]);
// numbers.forEach(print)
// numbers.forEach(function (el) {
//     if(el % 2 === 0) {
//     console.log(el)
//     }
// })
// for(let el of numbers){
//     console.log(el);
// }

// map method
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// const doubles = numbers.map(function (num){
//     return num * 2;
// })
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// arrow function
// const add = function(x,y) {
//     return x+y;
// }
// const add = (x,y) => {
//     return x+y;
// }
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// const add = (x,y) => x+y;

// setTimeout and setInterval
// console.log("HELLO......")
// setTimeout(() => {
//     console.log("..........are you still there?")
// }, 3000)
// console.log("GOODBYE!!")
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// filter
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// numbers.filter(n => {
//     return n < 10
// })

// some and every
// const exams = [80,72,48,45,17,96,74,24,98,35,41]
// exams.every(score => score >= 75)
// exams.some(score => score >= 75)

// reduce method
// [3,5,7,9,11].reduce((acc,cV) => (acc+cV));

// Arrow functions and this keyword
// const person = {
//     firstName: 'Hugo',
//     lastName: 'Hector',
//     fullName: function() {
//        return `${this.firstName} ${this.lastName}`
//     },
//     fullName2: () => {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(function() {
//             console.log(this)
//             console.log(this.fullName())
//         }, 3000) // tyr changing the fullName function to understand.
//     },
//     shoutName2: function() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(this.fullName())
//         }, 3000)
//     }
// }

// // Default Params Old
// function rollDieOld(numSides) {
//     if (numSides == undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// // Deafult Params New
// function rollDieNew(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// Spread Syntax
// const nums = [1,23,186,65,54,74,6,2174]
// Math.max(nums); // this gives us undefined because the function accpets seperate arguments while passing an array is a single argument
// Math.max(...nums);  // this spreads the whole array passed as seperate arguments which the fucntion accepts and return the answer

// Spread with Array Literals
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs] // copies the arrays into a new and different array

// Spread in Object Literals
// const feline = {legs: 4, family: 'Felidae'};
// const canine = {isFurry: true, family: 'Caninae'}
// newObjectLiteral = {...feline, bad: true} // with object literal possess the same function like with array literals

// Rest Params
// function sum(...nums) {
//     return nums.reduce((total,el) => total+el) // [...] is the rest operator 
// }
// function raceResults(gold,silver,...everyoneElse){
//     console.log(`GOLD medal goes to: ${gold}`)
//     console.log(`SILVER medal goes to: ${silver}`)
// }

// // Destructuring Arrays
// const scores = [6519641,58956,82198,89485]
// const highScore = scores[0];
// const secondHighestScore = scores[1]
// // Destructuring used for extraction
// const [gold,silver, ...rest] = scores;
// // Destructuring Objects
// const {email: userEmail, work = 'default argument'} = user;
// // Destructuring Params
// function fullName(user){
//     const {firstName,lastName='adsdasd'} = user;
//     return `${firstName} ${lastName}`
// }
