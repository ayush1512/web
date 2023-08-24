const colorbtn = document.querySelector('#color');
const container = document.querySelector('#container');
makeRandColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
colorbtn.addEventListener('click',function(e){
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
container.addEventListener('click', function(e){
    container.classList.toggle('hide');
})