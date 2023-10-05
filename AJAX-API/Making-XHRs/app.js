const req = new XMLHttpRequest(); // creates a new request object

//Event Handler Callbacks
req.onload = function() {
    console.log("It Loaded!!");
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
    // Run when no error
};

req.onerror = function() {
    console.log("Error!");
    console.log(this);
    // Run when there is an error
};

req.open('GET', "https://swapi.dev/api/people/1/"); // opens a new request
req.send(); // sends request

// Why XHRs are not used:
// 1. Too much boilerplate code
// 2. Callbacks are not ideal
// 3. No streaming
// 4. No proper error handling
// 5. No support for promises
// 6. No support for async/await
// 7. No support for progress events







