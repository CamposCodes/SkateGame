let character = document.querySelector('#character');
let block = document.querySelector('#block');
let startButton = document.querySelector('.start');

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    },500);
}
function start(){
    if(block.classList != 'animateStart'){
        block.classList.add('animateStart');
    }
}




let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 200){
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
let game = document.querySelector('#game')

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
    var space = codigoTecla == 32;
    if (space) {
        jump();
    }
  });