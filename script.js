alert("WARNING! \n\nOptimized for 16:9 screen sizes only")
alert("Win = Best of 4")


// rock = 1
// paper = 2
// scissor = 3
function computerPlay() {
    let choice = Math.floor(Math.random()*10)
    if (choice < 4 && choice >= 1){
        return choice
    } else {
        return computerPlay()
    }
}


const rpsOpt = document.querySelectorAll('.opt')
rpsOpt.forEach(e => e.addEventListener('click', round))
function round(e) {

    const computerSelection = computerPlay();
    const playerSelection = e.path[0].getAttribute('id');
    

    if (playerSelection == "rock" && computerSelection == 1){
        return game(0)
    } else if (playerSelection == "rock" && computerSelection == 2){
        enemyATK();
        return game(-1)
    } else if (playerSelection == "rock" && computerSelection == 3){
        playerATK();
        return game(1)
    }

    if (playerSelection == "paper" && computerSelection == 2){
        return game(0)
    } else if (playerSelection == "paper" && computerSelection == 3){
        enemyATK();
        return game(-1)
    } else if (playerSelection == "paper" && computerSelection == 1){
        playerATK();
        return game(1)
    }

    if (playerSelection == "scissors" && computerSelection == 3){
        return game(0)
    } else if (playerSelection == "scissors" && computerSelection == 1){
        enemyATK();
        return game(-1)
    } else if (playerSelection == "scissors" && computerSelection == 2){
        playerATK();
        return game(1)
    }
    
}

function endGame(result){
    document.body.style.transition = "opacity "+1800+"ms ease";
    document.body.style.opacity = 0;
    document.body.classList.add('doom-font')

    setTimeout(() => {
        document.body.style.transition = "";
        document.body.style.opacity = "";
        document.body.innerHTML = `<h1>${result}</h1>`
        document.body.innerHTML += '<h2>Reload the page to play again.</h2>'
        document.body.innerHTML += '<p>Developed by /LoudQuack</p>'
        document.body.innerHTML += '<p>Music by Karl Casey @ White Bat Audio</p>'
        document.body.innerHTML += '<p>Sprites and SFX stolen from around the internet</p>'
    }, 2200);


}


let computerWins = 0;
let playerWins = 0;
function game(n) {

        const playerScore = document.querySelector("#playerScore")
        const enemyScore = document.querySelector('#enemyScore')


        let result = n
        console.log(result)
        if (result == 1){
            playerWins += 1
            playerScore.innerText = playerWins;
            shotgunSound();
        } else if (result == -1){
            computerWins += 1
            enemyScore.innerText = computerWins;
            cyberdemonSound();
            reduceStatus();
        } else if (result == 0){
            tie();
        }

        if (playerWins == 4){
            endGame('You win!');
        } else if (computerWins == 4){
            endGame('You lose!');
        }

    }




function shotgunSound(){
    const audio = document.createElement('audio');
    audio.setAttribute('src', 'bgm/shotgun.mp3');
    audio.setAttribute('hidden', 'true');
    audio.currentTime = 0;
    audio.play();
}

function cyberdemonSound(){
    const audio = document.createElement('audio');
    audio.setAttribute('src', 'bgm/cyberdemonATK.mp3');
    audio.setAttribute('hidden', 'true');
    audio.currentTime = 0;
    audio.play();
}


function reduceStatus(){
    let health = document.querySelector('#health-bar')
    let newStatus = health.innerText;

    if (newStatus.length > 3){
        newStatus = newStatus.slice(0, 3);
    } else if (newStatus.length > 2){
        newStatus = newStatus.slice(0, 2);
    } else {
        newStatus = newStatus.slice(0, 1);
    }

    newStatus = newStatus - 25;
    health.innerText = newStatus + '%';


    const doomFace = document.querySelector('#doomGuyFace')
    if (newStatus == 75) {
        doomFace.setAttribute('src', 'img/doomFace2.gif');
    } else if (newStatus == 25){
        doomFace.setAttribute('src', 'img/doomFace3.gif');
    } 

    
}


    



const button = document.querySelector('#play-game-cover > input');
button.addEventListener('click', startGame);
function startGame(){

    openFullscreen();

    const coverDiv = document.querySelector('#play-game-cover');
    coverDiv.style.transition = "opacity "+1000+"ms ease";
    coverDiv.style.opacity = 0;
    setTimeout(() => {
        document.body.removeChild(coverDiv);
    }, 1000);

    
    const audio = document.querySelector(`audio[src="bgm/WBA Free Track - Torn Flesh.mp3"]`);
    audio.volume = 0.3;
    audio.play();
}


 /* View in fullscreen */
 function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}



function enemyATK(){
    const enemy = document.querySelector('#enemy')

    enemy.setAttribute('src', 'img/enemyATK.gif')
    rpsOpt.forEach(e => e.removeEventListener('click', round))

    setTimeout(() => {
        enemy.setAttribute('src', 'img/enemy.gif');
        rpsOpt.forEach(e => e.addEventListener('click', round))
    }, 2000);
}

function playerATK(){
    const atkImg = document.querySelector('#playerATK');
    atkImg.setAttribute('src', 'img/playerATK.gif');
    rpsOpt.forEach(e => e.removeEventListener('click', round))

    setTimeout(() => {
        atkImg.setAttribute('src', '')
        rpsOpt.forEach(e => e.addEventListener('click', round))
    }, 1000);
}

function tie(){
    const enemy = document.querySelector('#enemy')

    enemy.setAttribute('src', 'img/cacotie.gif')
    enemy.style.bottom = '18vh';
    rpsOpt.forEach(e => e.removeEventListener('click', round))

    setTimeout(() => {
        enemy.style.bottom = '0';
        enemy.setAttribute('src', 'img/enemy.gif');
        rpsOpt.forEach(e => e.addEventListener('click', round))
        

    }, 1500);

}


rpsOpt.forEach(e => e.addEventListener('mouseover', optSound))
function optSound(){
    const audio = document.querySelector(`audio[src="bgm/select.mp3"]`);
    audio.currentTime = 0
    audio.play();
}

