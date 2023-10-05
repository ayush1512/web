const btn1 = document.querySelector('.p1btn');
const btn2 = document.querySelector('.p2btn');
const resetbtn = document.querySelector('.reset');
const p1Display = document.querySelector('.left');
const p2Display = document.querySelector('.right');
const wScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let wScore = 3;
let isGameOver = false;

btn1.addEventListener('click',function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === wScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;    
    }
})
btn2.addEventListener('click',function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === wScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;    
    }
})

wScoreSelect.addEventListener('change',function(){
    wScore = parseInt(wScoreSelect.value);
    reset();
})

resetbtn.addEventListener('click',reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner','loser');    
    p2Display.classList.remove('winner','loser');    
}

