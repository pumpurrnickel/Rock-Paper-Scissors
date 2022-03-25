const hands = ['rock', 'paper', 'scissors'];

const getHands = () => {
    return hands[parseInt(Math.random()*10)%3];
}

const player1 = {
    name: 'Bonk',
    getHands: getHands
}

const player2 = {
    name: 'Donk',
    getHands: getHands
}

const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let playRound = (p1,p2) => {
    
    let p1Hand = p1.getHands();
    let p2Hand = p1.getHands();

    console.log(p1.name, 'played', p1Hand);
    console.log(p2.name, 'played', p2Hand);

    if (p1Hand === p2Hand){
        console.log('tie');
        return null;
    } else if (winConditions[p1Hand] === p2Hand) {
        console.log(p1.name, 'wins.');
        return p1;
    } else {
        console.log(p2.name, 'wins.');
        return p2;
    }
}

let playGame = (puraya1, puraya2, playUntil) => {

    let puraya1Wins = 0;
    let puraya2Wins = 0;


    while (puraya1Wins < playUntil && puraya2Wins < playUntil){
        console.log('Current Score:', player1.name, ':', puraya1Wins);
        console.log('Current Score:', player2.name, ':', puraya2Wins);
        if (!playRound(player1, player2)){

        } else if (playRound(player1, player2) === player1) {
            puraya1Wins++;
        } else {
            puraya2Wins++;
        }
    }

    if (puraya1Wins === playUntil){
        return player1;
    } else {
        return player2;
    }

}

console.log(playGame(player1, player2, 5));