// axios.get('https://swapi.dev/api/people/1/')
// .then(res => {
//     console.log("RESPONSE:", res.data)
// })
// .catch((e) => {
//     console.log("ERROR!", e);
// })

const getStarWarsData = async(id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR!", e);
        
    }
}

getStarWarsData(5);

// What is AXIOS?
// Axios is a library that helps us make http requests to external resources. It is a promise-based library,
// which means we can take advantage of async and await for more readable asynchronous code.

