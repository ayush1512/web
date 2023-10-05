const fakeRequest = (url) => {
    return new Promise((resolve,reject)=>{
        const rand = Math.random(); // 0 to 1
        setTimeout(()=>{
            if(rand<0.7){
                resolve('FAKE DATA HERE');
            }else{
                reject('Request error');
            }
        },1000);
    })  
}                 

fakeRequest('/dogs/1')
    .then((data)=>{
        console.log("Done with request")
        console.log('data is:',data)
    })
    .catch((err)=>{
        console.log("Oh! no",err)
    })



// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     },delay)
// }

// delayedColorChange('olive',1000, ()=>{
//     delayedColorChange('red', 1000, ()=>{
//         delayedColorChange('magenta', 1000, ()=>{
//             delayedColorChange('yellow', 1000, ()=>{
//                 delayedColorChange('blue', 1000, ()=>{
//                     delayedColorChange('green', 1000)
//                 })
//             })
//         })
//     })
// });

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
    .then(()=> delayedColorChange('orange',1000))
    .then(()=> delayedColorChange('yellow',1000))
    .then(()=> delayedColorChange('green',1000))
    .then(()=> delayedColorChange('brown',1000))
    .then(()=> delayedColorChange('magenta',1000))
    .then(()=> delayedColorChange('blue',1000))





