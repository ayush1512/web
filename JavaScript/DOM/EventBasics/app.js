const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log("You clicked me!!")
    console.log("Dont touch me!")
}

btn.onmouseenter = function scream() {
    console.log("AHHHHHH....")
}

const h1 = document.querySelector('h1')
console.dir(h1)
// h1.onclick = function hover(){
//     console.log("Stop hovering me!!!")
// }
h1.onclick = ()=>{
    alert("Please stop touching...")
}