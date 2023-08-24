document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt); // This will print the event object
});

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e){
//     console.log(e);
//     console.log(e.key);
//     console.log(e.code);
// });

// input.addEventListener('keyup',function(){
//     console.log('Key Up');
// });
// input.addEventListener('keypress',function(){
//     console.log('Key Press');
// });
// input.addEventListener('focus',function(){
//     console.log('Focus');
// });

// window.addEventListener('keydown', function(event){
//     console.log(event.code);
// })

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log("IGNORED!");
    }
})