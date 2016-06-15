/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  var scoreForTurnPlayer1 = 0;
  var totalScorePlayer1 = 0;
  $("button#roll-player1").click(function () {
    var rollResult = roll();
    $("p#roll-result-player1").text(rollResult);
    if (rollResult === 1) {
      scoreForTurnPlayer1 = 0;
      $("p#turn-score-player1").text(scoreForTurnPlayer1);
      nextTurn();
    } else {
      scoreForTurnPlayer1 = addRolls(scoreForTurnPlayer1, rollResult);
      $("p#turn-score-player1").text(scoreForTurnPlayer1);
    }
  });

  $("button#hold-player1").click(function () {
    totalScorePlayer1 = hold(scoreForTurnPlayer1, totalScorePlayer1);
    $("p#total-score-player1").text(totalScorePlayer1);
    if (totalScorePlayer1 >= 100) {
      alert ("You Win!!!");
    }
    scoreForTurnPlayer1 = 0;
    nextTurn();
  });

  var scoreForTurnPlayer2 = 0;
  var totalScorePlayer2 = 0;
  $("button#roll-player2").click(function () {
    var rollResult = roll();
    $("p#roll-result-player2").text(rollResult);
    if (rollResult === 1){
      scoreForTurnPlayer2 = 0;
      $("p#turn-score-player2").text(scoreForTurnPlayer2);
      nextTurn();
    } else {
      scoreForTurnPlayer2 = addRolls(scoreForTurnPlayer2, rollResult);
      $("p#turn-score-player2").text(scoreForTurnPlayer2);

      }
  });

  $("button#hold-player2").click(function () {
    totalScorePlayer2 = hold(scoreForTurnPlayer2, totalScorePlayer2);
    $("p#total-score-player2").text(totalScorePlayer2);
    if (totalScorePlayer2 >= 100){
      alert ("You Win!!!");
    }
    scoreForTurnPlayer2 = 0;
    nextTurn();
  });

  $("button#new-game").click(function () {
    scoreForTurnPlayer1 = 0;
    scoreForTurnPlayer2 = 0;
    totalScorePlayer1 = 0;
    totalScorePlayer2 = 0;
    $("p#roll-result-player1").text("");
    $("p#turn-score-player1").text("");
    $("p#total-score-player1").text("");
    $("p#roll-result-player2").text("");
    $("p#turn-score-player2").text("");
    $("p#total-score-player2").text("");
    $("button.player1").show();
    $("button.player2").hide();
  })
});

var nextTurn = function () {
  $("button.player1").toggle();
  $("button.player2").toggle();
}



// Back end logic
var roll = function () {
  var integer = Math.floor(Math.random() * (6 - 1)) + 1;
    return integer;
}

var addRolls = function (currentScore, rollResult) {
  var scoreForTurn = currentScore + rollResult;
  return scoreForTurn;
}

 var hold = function (scoreForTurn, totalScore) {
   totalScore = totalScore + scoreForTurn;
   return totalScore;
 }
