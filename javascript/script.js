var count = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var gameOver = false;
var isGameWon = false;
var isGameDrawn = false;
var resetTime = false;
var pvp = false;
var pvc = false;
var time = "";
var letter = "";
var whoPlaying = ""
var pvpTurn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
var pvcTurn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

var grab = function(item){
	return document.getElementById(item);
}

function disableAllCells() {
	grab("square1").style.pointerEvents = 'none', grab("square2").style.pointerEvents = 'none', grab("square3").style.pointerEvents = 'none';
	grab("square4").style.pointerEvents = 'none', grab("square5").style.pointerEvents = 'none', grab("square6").style.pointerEvents = 'none';
	grab("square7").style.pointerEvents = 'none', grab("square8").style.pointerEvents = 'none', grab("square9").style.pointerEvents = 'none';
}

function enableAllCells(){
	grab("square1").style.pointerEvents = "all"; grab("square2").style.pointerEvents = "all"; grab("square3").style.pointerEvents = "all";
	grab("square4").style.pointerEvents = "all"; grab("square5").style.pointerEvents = "all"; grab("square6").style.pointerEvents = "all";
	grab("square7").style.pointerEvents = "all"; grab("square8").style.pointerEvents = "all"; grab("square9").style.pointerEvents = "all";
}

var timerStart = function()
{
	if(gameOver)
	{
	   return;
	}
     time = setTimeout(function(){
        seconds++;
        if(seconds > 59){
            seconds = 0;
            minutes++;
            if(minutes > 59){
                minutes = 0;
                hours++;
                if(hours < 10){
                    grab('hours').innerHTML = "0"+ hours + ":";
                }else{
                    grab('hours').innerHTML = hours + ":";
                }
            }
            if(minutes < 10){
                grab('minutes').innerHTML = "0"+ minutes + ":";
            }else{
                grab('minutes').innerHTML = minutes + ":";
            }
        }
        if(seconds < 10){
            grab('seconds').innerHTML = "0"+ seconds;
        }else{
            grab('seconds').innerHTML = seconds;
        }
        timerStart();
    }, 1000);
}

function checkForWinner(){
    if (gameOver)
        {return;}

    var sqr1 = grab("square1").innerHTML, sqr2 = grab("square2").innerHTML, sqr3 = grab("square3").innerHTML;
    var sqr4 = grab("square4").innerHTML, sqr5 = grab("square5").innerHTML, sqr6 = grab("square6").innerHTML;
    var sqr7 = grab("square7").innerHTML, sqr8 = grab("square8").innerHTML, sqr9 = grab("square9").innerHTML;

    //check rows for win
    if(((sqr1=="X") || (sqr1=="O")) && ((sqr1 == sqr2) && (sqr2 == sqr3))){
        isGameWon = true; isWonOrDrawn(sqr1);
    } else if(((sqr4=="X") || (sqr4=="O")) && ((sqr4 == sqr5) && (sqr5 == sqr6))){
        isGameWon = true; isWonOrDrawn(sqr4);
    } else if(((sqr7=="X") || (sqr7=="O")) && ((sqr7 == sqr8) && (sqr8 == sqr9))){
        isGameWon = true; isWonOrDrawn(sqr7);
    }
    //check cols for win
    else if(((sqr1=="X") || (sqr1=="O")) && ((sqr1 == sqr4) && (sqr4 == sqr7))){
        isGameWon = true; isWonOrDrawn(sqr1);
    } else if(((sqr2=="X") || (sqr2=="O")) && ((sqr2 == sqr5) && (sqr5 == sqr8))){
        isGameWon = true; isWonOrDrawn(sqr2);
    } else if(((sqr3=="X") || (sqr3=="O")) && ((sqr3 == sqr6) && (sqr6 == sqr9))){
        isGameWon = true; isWonOrDrawn(sqr3);
    }
    //check diags for winner
    else if(((sqr1=="X") || (sqr1=="O")) && ((sqr1 == sqr5) && (sqr5 == sqr9))){
        isGameWon = true; isWonOrDrawn(sqr1);
    } else if(((sqr3=="X") || (sqr3=="O")) && ((sqr3 == sqr5) && (sqr5 == sqr7))){
        isGameWon = true; isWonOrDrawn(sqr3);
    }
    //draw
    else if(sqr1 != "" && sqr2 != "" && sqr3 != "" && sqr4 != "" && sqr5 != "" &&
            sqr6 != "" && sqr7 != "" && sqr8 != "" && sqr9 != ""){
        isGameDrawn = true; isWonOrDrawn(sqr1);
    }
}

function isWonOrDrawn(winner){
    gameOver = true;
    if(isGameWon){
        alert("Player " + winner + " has won the match!");
        disableAllCells();
        grab("playerTurn").style.display = 'none';
        grab("playAgainBtn").style.display = 'initial';
	grab("startBtn").style.display = 'none';
    } else if(isGameDrawn){
        alert("It's a tie!");
        disableAllCells();
        grab("playerTurn").style.display = 'none';
        grab("playAgainBtn").style.display = 'initial';
	grab("startBtn").style.display = 'none';
    }
}

function checkForEmptyCells(){
    let rNmumber = Math.floor((Math.random() * 9) + 1);

    var sqr1 = grab("square1").innerHTML, sqr2 = grab("square2").innerHTML, sqr3 = grab("square3").innerHTML;
    var sqr4 = grab("square4").innerHTML, sqr5 = grab("square5").innerHTML, sqr6 = grab("square6").innerHTML;
    var sqr7 = grab("square7").innerHTML, sqr8 = grab("square8").innerHTML, sqr9 = grab("square9").innerHTML;

    if(rNmumber == 1 && sqr1 == ""){
        grab("square1").innerHTML = "O"; checkForWinner(); grab("square1").pointerEvents = 'none';
    } else if(rNmumber == 2 && sqr2 == ""){
        grab("square2").innerHTML = "O"; checkForWinner(); grab("square2").pointerEvents = 'none';
    } else if(rNmumber == 3 && sqr3 == ""){
        grab("square3").innerHTML = "O"; checkForWinner(); grab("square3").pointerEvents = 'none';
    } else if(rNmumber == 4 && sqr4 == ""){
        grab("square4").innerHTML = "O"; checkForWinner(); grab("square4").pointerEvents = 'none';
    } else if(rNmumber == 5 && sqr5 == ""){
        grab("square5").innerHTML = "O"; checkForWinner(); grab("square5").pointerEvents = 'none';
    } else if(rNmumber == 6 && sqr6 == ""){
       grab("square6").innerHTML = "O"; checkForWinner(); grab("square6").pointerEvents = 'none';
    } else if(rNmumber == 7 && sqr7 == ""){
        grab("square7").innerHTML = "O"; checkForWinner(); grab("square7").pointerEvents = 'none';
    } else if(rNmumber == 8 && sqr8 == ""){
        grab("square8").innerHTML = "O"; checkForWinner(); grab("square8").pointerEvents = 'none';
    } else if(rNmumber == 9 && sqr9 == ""){
       grab("square9").innerHTML = "O"; checkForWinner(); grab("square9").pointerEvents = 'none';
    } else{ checkForEmptyCells();}

    // checkForWinner();
    pvcTurn = 1;
}

function printOnlyX(){
    grab("square1").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square1").innerHTML != "O") {grab("square1").innerHTML = 'X'; grab("square1").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square2").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square2").innerHTML != "O") {grab("square2").innerHTML = 'X'; grab("square2").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square3").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square3").innerHTML != "O") {grab("square3").innerHTML = 'X'; grab("square3").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square4").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square4").innerHTML != "O") {grab("square4").innerHTML = 'X'; grab("square4").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square5").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square5").innerHTML != "O") {grab("square5").innerHTML = 'X'; grab("square5").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square6").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square6").innerHTML != "O") {grab("square6").innerHTML = 'X'; grab("square6").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square7").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square7").innerHTML != "O") {grab("square7").innerHTML = 'X'; grab("square7").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square8").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square8").innerHTML != "O") {grab("square8").innerHTML = 'X'; grab("square8").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});
    grab("square9").addEventListener("click", function(){if(grab("pVp").checked){return;}  if(grab("square9").innerHTML != "O") {grab("square9").innerHTML = 'X'; grab("square9").pointerEvents = 'none'; pvcTurn = 0; checkForWinner(); if(!gameOver) checkForEmptyCells();}});


}

function togglePlayer()
{

   if(pvpTurn == 1){
        grab("playerTurn").innerHTML = "It is X's turn";
        pvpTurn = 0;
        letter = 'O';
        return letter;
    } else if(pvpTurn == 0){
        grab("playerTurn").innerHTML = "It is O's turn";
        pvpTurn = 1;
        letter = 'X';
        return letter;
    }
 
}

function playerVsComputer()
{

    if(pvcTurn == 1){
       checkForWinner();
    } else if(pvcTurn == 0){
        checkForEmptyCells();
        checkForWinner();
        pvcTurn = 1;
        currentGameSetting();
    }
}

function playerVsPlayer(){
    
    if(pvp)
    {whoPlaying = togglePlayer();}

    grab("square1").addEventListener("click", function(){grab("square1").innerHTML = togglePlayer(); checkForWinner(); grab("square1").style.pointerEvents = 'none';});
    grab("square2").addEventListener("click", function(){grab("square2").innerHTML = togglePlayer(); checkForWinner(); grab("square2").style.pointerEvents = 'none';});
    grab("square3").addEventListener("click", function(){grab("square3").innerHTML = togglePlayer(); checkForWinner(); grab("square3").style.pointerEvents = 'none';});
    grab("square4").addEventListener("click", function(){grab("square4").innerHTML = togglePlayer(); checkForWinner(); grab("square4").style.pointerEvents = 'none';});
    grab("square5").addEventListener("click", function(){grab("square5").innerHTML = togglePlayer(); checkForWinner(); grab("square5").style.pointerEvents = 'none';});
    grab("square6").addEventListener("click", function(){grab("square6").innerHTML = togglePlayer(); checkForWinner(); grab("square6").style.pointerEvents = 'none';});
    grab("square7").addEventListener("click", function(){grab("square7").innerHTML = togglePlayer(); checkForWinner(); grab("square7").style.pointerEvents = 'none';});
    grab("square8").addEventListener("click", function(){grab("square8").innerHTML = togglePlayer(); checkForWinner(); grab("square8").style.pointerEvents = 'none';});
    grab("square9").addEventListener("click", function(){grab("square9").innerHTML = togglePlayer(); checkForWinner(); grab("square9").style.pointerEvents = 'none';});
  
}

function currentGameSetting()
{
	if( grab("pVc").checked)
	{
		grab("pVp").style.display = 'none';
		pvc = true;
		grab("playerTurn").innerHTML = "";
		playerVsComputer();
	}
	if(grab("pVp").checked)
	{
		grab("pVc").style.display = 'none';
		pvp = true;
		playerVsPlayer();
	}
	
}


var reset = function(){
    
    grab("playAgainBtn").style.display = 'none';
    grab("playerTurn").style.display = 'initial';
    isGameWon = false, isGameDrawn = false, count++;
    grab("gamesPlayed").innerHTML = "Games Played: " + count;

    // clear cell innerHTML
    grab("square1").innerHTML = "", grab("square2").innerHTML = "", grab("square3").innerHTML = "";
    grab("square4").innerHTML = "", grab("square5").innerHTML = "", grab("square6").innerHTML = "";
    grab("square7").innerHTML = ""; grab("square8").innerHTML = "", grab("square9").innerHTML = "";


    enableAllCells();
    gameOver = false; resetTime = true;
    hours = 0, minutes = 0, seconds = 0;
    grab('hours').innerHTML = '00:'; grab('minutes').innerHTML = '00:'; grab('seconds').innerHTML = "00";
    timerStart();
}

var startGame = function()
{
enableAllCells();
currentGameSetting();
grab('hours').innerHTML = '00:'; grab('minutes').innerHTML = '00:'; grab('seconds').innerHTML = "00";
timerStart();
grab("startBtn").onclick = reset;
}

window.onload = function(){
    disableAllCells();
    printOnlyX();
    grab("startBtn").onclick = startGame;
    grab("playAgainBtn").onclick = reset;
    

}
