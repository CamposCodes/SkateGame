let character = document.querySelector('#character');
let block = document.querySelector('#block');
let startButton = document.querySelector('.start');

let score = 0;

function start(){
    if(block.classList != 'animateStart'){
        block.classList.add('animateStart');
    }
}

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    },500);
}

function flip(){
    if(character.classList != 'animateFlip'){
        character.classList.add('animateFlip');
    }
    setTimeout(function(){
        character.classList.remove('animateFlip');
    },500);
}

function nollie(){
    if(character.classList != 'animateNollie'){
        character.classList.add('animateNollie');
    }
    setTimeout(function(){
        character.classList.remove('animateNollie');
    },500);
}
function shoveit(){
    if(character.classList != 'animateShov'){
        character.classList.add('animateShov');
    }
    setTimeout(function(){
        character.classList.remove('animateShov');
    },500);
}


let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
    if(blockLeft < 70 && blockLeft > 0 && characterTop >= 248){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('LOSE!')
        location.reload();
    }
},10);


character.addEventListener('click', jump);
startButton.addEventListener('click', start);

let bgHome = document.querySelector('#home');
let bgCity = document.querySelector('#city');
let bgSkatepark = document.querySelector('#skatepark');
let game = document.querySelector('#game');
let localScore = document.querySelector('#score-local');


bgHome.addEventListener('click', ()=>{
    game.style.background = 'var(--bgcolorh)';
});
bgCity.addEventListener('click', ()=>{
    game.style.background = 'var(--color3)';
});
bgSkatepark.addEventListener('click', ()=>{
    game.style.background = 'var(--color4)';
});

// ESPAÇO PARA CHARACTER PULAR
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowDown = codigoTecla == 40;
    if (ArrowDown) {
        jump();
        scoreUpdate(10);
    }
});
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var arrowUp = codigoTecla == 38;
    if (arrowUp) {
        flip();
        scoreUpdate(30);
    }
  });
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowRight = codigoTecla == 39;
    if (ArrowRight) {
        nollie();
        scoreUpdate(15);
    }
});
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowLeft = codigoTecla == 37;
    if (ArrowLeft) {
        shoveit();
        scoreUpdate(20);
    }
  });

  

function scoreUpdate(value){
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 600){
        score += value;
        localScore.innerHTML = score;
    }
}