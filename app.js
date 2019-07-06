/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice, gamePlaying;

init();

//document.querySelector('#current-' + activePlayer ).textContent = dice;

// get value
//var x = document.querySelector('#score-1').textContent;
//console.log(x);




// Hide dice attribute to style


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying){
        
        dice = Math.floor(Math.random() * 6) + 1;
    // image changed
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // value of dice


    if (dice !== 1) {
        // add to player 1
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    } else {
        // add to player 2

        //        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        //        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

        // can use toggle

        nextPlayer();

    }
    }
    
    
});


// click hold
document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if (gamePlaying){
        
         // add current score to global score
    score[activePlayer] += roundScore;

    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    // Check if player won
    if (score[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        
        document.getElementById('current-' + activePlayer).textContent = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        
    }
    else{
        nextPlayer();
    }
    
    }
   
 


});

function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
score = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';
    
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.add('active');


}
