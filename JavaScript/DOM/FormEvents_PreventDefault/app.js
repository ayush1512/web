const form = document.querySelector('#shelter');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement('li');
    newLI.innerHTML = catName;
    // console.log(newLI);
    list.append(newLI);
})
