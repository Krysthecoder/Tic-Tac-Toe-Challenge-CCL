
//      Getting Global Variables
let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById('playerTwoScore');
let blocks = Array.from(document.getElementsByClassName('block'));
const resetGame = document.getElementById("resetGame");
const newMatch = document.getElementById('newMatch');
let gameTitle = document.getElementById('gameTitle')


//      Set default values to number so we later just add numbers
playerOneScore.innerText = 0; 
playerTwoScore.innerText = 0;


//      Identify the player's turn with a true false 
let playersTurn = true;


//      Variable that will help on deciding if is it a tie or not
let isItTie = true;


//      Game grid with the players selection
let gameGrid = [[0,1,2],[3,4,5],[6,7,8]]


//      Reset function
resetGame.addEventListener('click', ()=>{
    location.reload();
});


//      New Match function
newMatch.addEventListener("click", () => {
    blocks.map(elem => elem.classList.replace("block-x", "block"));
    blocks.map(elem => elem.classList.replace("block-o", "block"));
    playersTurn = true;
    gameGrid = [[0,1,2],[3,4,5],[6,7,8]];
});


//      Set of functions that creates the grid with the X-0 selection
function rowOne(elem){
    if(playersTurn === true){
        gameGrid[0][elem] = "x"
    }else if(playersTurn === false){
        gameGrid[0][elem] = "o"
    }
}

function rowTwo(elem){
    if(playersTurn === true){
        gameGrid[1][elem] = "x"
    }else if(playersTurn === false){
        gameGrid[1][elem] = "o"
    }
}

function rowThree(elem){
    if(playersTurn === true){
        gameGrid[2][elem] = "x"
    }else if(playersTurn === false){
        gameGrid[2][elem] = "o"
    }
}


//      Funtion that determines who won the game
function winnerDecider(){

    //      Check each rows for the winner
    if(gameGrid[0].join('') === "xxx" || gameGrid[1].join('') === "xxx" ||gameGrid[2].join('') === "xxx"){
        gameTitle.innerText = "Player X has won";
        playerOneScore.innerText ++;

    }else if(gameGrid[0].join('') === "ooo" || gameGrid[1].join('') === "ooo" || gameGrid[2].join('') === "ooo"){
        gameTitle.innerText = "Player O has won";
        playerTwoScore.innerText ++;
        
    }else if (    //      Check each column for the winner
        (gameGrid[0][0] === "x") && (gameGrid[1][0] === "x") && (gameGrid[2][0] === "x") ||
        (gameGrid[0][1] === "x") && (gameGrid[1][1] === "x") && (gameGrid[2][1] === "x") ||
        (gameGrid[0][2] === "x") && (gameGrid[1][2] === "x") && (gameGrid[2][2] === "x")
    ){
        gameTitle.innerText = "Player X has won";
        playerOneScore.innerText ++;
        
    }else if(
        (gameGrid[0][0] === "o") && (gameGrid[1][0] === "o") && (gameGrid[2][0] === "o") ||
        (gameGrid[0][1] === "o") && (gameGrid[1][1] === "o") && (gameGrid[2][1] === "o") ||
        (gameGrid[0][2] === "o") && (gameGrid[1][2] === "o") && (gameGrid[2][2] === "o")
    ){
        gameTitle.innerText = "Player O has won";
        playerTwoScore.innerText ++;
        
    }else if( //      Check diagonally for the winner
        (gameGrid[0][0] === "x") && (gameGrid[1][1] === "x") && (gameGrid[2][2] === "x") ||
        (gameGrid[0][2] === "x") && (gameGrid[1][1] === "x") && (gameGrid[2][0] === "x")
    ){
        gameTitle.innerText = "Player X has won";
        playerOneScore.innerText ++;
        
    }else if(
        (gameGrid[0][0] === "o") && (gameGrid[1][1] === "o") && (gameGrid[2][2] === "o") ||
        (gameGrid[0][2] === "o") && (gameGrid[1][1] === "o") && (gameGrid[2][0] === "o")
    ){
        gameTitle.innerText = "Player O has won";
        playerTwoScore.innerText ++;
        
    }
}


//      Evaluate the players turn and change the element to X or O
function X_O_selection(elem){
    if(playersTurn === true){
        elem.classList.replace("block", "block-x");
        playersTurn = false;
        gameTitle.innerText = "Player O is next."
        winnerDecider();
    }else if(playersTurn === false){
        elem.classList.replace("block", "block-o");
        playersTurn = true;
        gameTitle.innerText = "Player X is next."
        winnerDecider();
    }
};


//      Event Listener that will call the function to change the icon
blocks.map(elem => elem.addEventListener("click", ()=>{
    X_O_selection(elem)
}));
