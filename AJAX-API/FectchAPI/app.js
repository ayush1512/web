// fetch("https://swapi.dev/api/people/1/") // returns a promise
//     .then((res) => {
//         console.log("Resolved!",res);
//         // res.json().then((data) => {
//         //     console.log("JSON Done",data);
//         // })
//         return res.json()
//     })
//     .then((data) => {
//         console.log("JSON Done",data);
//     })
//     .catch((e) => {
//         console.log("Error!",e)
//     });

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);

    } catch (error) {
        console.log("Error!!")
    }
};
    
loadStarWarsPeople();

// What is Fetch API?
// Fetch API is a simple interface for fetching resources.
// Fetch API is a promise based API.
// Fetch API is a replacement for XMLHttpRequest.
// Fetch API is not supported in Internet Explorer and Opera Mini.
// Fetch API is a modern replacement for XMLHttpRequest.
// Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
// Fetch API provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
// Fetch API is a promise-based mechanism, and provides a clean interface for fetching resources.

