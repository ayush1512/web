const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random()*4500) + 500;  
    setTimeout(()=>{
        if(delay > 4000){
            success('Connection Timeout :(')
        } else {
            failure(`Here is your fake data from ${url}`)
        }
    },delay)    
}


const fakeRequestPromise = (url) => {
    data = `Here is your data from ${url}`
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay > 4000){
                resolve('Connection Timeout :(')
            } else {
                reject(`Here is your fake data from ${url}`)
            }
        },delay)
    })
}

// const request = fakeRequestPromise('yelp.com/api/coffee/page1');
// request.then(()=>{
//     console.log('IT WORKED!!!')
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//     .then(()=>{
//         console.log('IT WORKED!!![2]')
//         fakeRequestPromise('yelp.com/api/coffee/page3')
//         .then(()=>{
//             console.log('IT WORKED!!![3]')
//         })
//         .catch(()=>{
//             console.log('OH NO, ERROR (page3)')
//         })
//     })
//     .catch(()=>{
//         console.log('OH NO, ERROR (page2)')
//     })
// }).catch(()=>{
//     console.log('OH NO, ERROR!!! (page1)')
// })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data)=>{
        console.log('IT WORKED!! [1]')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data)=>{
        console.log('IT WORKED!! [2]')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data)=>{
        console.log('IT WORKED!! [3]')
        console.log(data)
    })
    .catch((err)=>{
        console.log('OH NO, A REQUEST FAILED!!')
    })