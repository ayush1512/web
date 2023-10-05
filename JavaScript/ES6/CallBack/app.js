// console.log("Sending request a server!")
// setTimeout(() => {
//     console.log("Here is your data from the server...")
// },3000)
// console.log("I am at the end of the file.")

// console.log("I print first!");
// setTimeout(() => {
//     console.log("I print after 3 seconds");
// },3000)
// console.log("I print second!");

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// },1000)
// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue';
// },2000)
// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// },3000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'magenta';
//                 },1000)
//             },1000)
//         },1000)        
//     },1000)
// },1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext();
    },delay)
}

delayedColorChange('olive',1000, ()=>{
    delayedColorChange('red', 1000, ()=>{
        delayedColorChange('magenta', 1000, ()=>{
            delayedColorChange('yellow', 1000, ()=>{
                delayedColorChange('blue', 1000, ()=>{
                    delayedColorChange('green', 1000)
                })
            })
        })
    })
});

// searchMoviesAPI('amaedus', ()=>{
//     saveToMyDB(movies, ()=>{
//         // if it works run this:
//     }, ()=>{
//         // if it doesn't work, run this:
//     })
// }, ()=>{
//     // if API is down, or request failed
// })
