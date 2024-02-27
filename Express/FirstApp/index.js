const express = require('express');
const app = express();
// console.dir(app);
app.listen(6969, () => {
    console.log("LISTENING ON PORT 6969");
})

// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST!')
//     // res.send("HELLO! WE GOT YOUR REQUEST! THIS IS A RESPONSE!!")
//     // res.send({color: 'red'})
//     // res.send('<h1>This is my webpage</h1>')
// })

app.post('/cats', (req,res) => {
    res.send('POST REQUEST TO /cats DIFFERENT THAN GET REQUEST')
})

//Routing : In the context of web development, routing is the process of determining how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

//Each route can have one or more handler functions, which are executed when the route is matched.

//Route Handlers : 
app.get('/', (req,res) => {
    res.send('This is the home page')
})
app.get('/r/:subreddit',(req,res) => {
    console.log(req.params)
    // res.send("This is a subreddit!")
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postID',(req,res) => {
    console.log(req.params)
    // res.send("This is a subreddit!")
    const { subreddit,postID } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit, ${postID} postID</h1>`)
})
app.get('/cats', (req,res) => {
    res.send('MEOW!!')
})
app.get('/dogs', (req,res) => {
    // console.log('CATS Request!!!')
    res.send('WOOF!!')
})
app.get('/search', (req,res) => {
    const {q} = req.query;
    if(!q){
        res.send("<h1>NOTHING FOUND IF NOTHING SEARCHED FOR!!!!</h1>")
    }else{
        res.send(`<h1>Search Results for: ${q}</h1>`)
    }
})
app.get('*', (req,res) => {
    res.send('This is no page')
})
