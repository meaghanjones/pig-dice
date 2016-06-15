/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  var scoreForTurnPlayer1 = 0;
  $("button#roll-player1").click(function () {
    var rollResult = roll();
    $("p#roll-result-player1").text(rollResult);
    scoreForTurnPlayer1 = addRolls(scoreForTurnPlayer1, rollResult);
    $("p#turn-score-player1").text(scoreForTurnPlayer1);
  })
  var scoreForTurnPlayer2 = 0;
  $("button#roll-player2").click(function () {
    var rollResult = roll();
    $("p#roll-result-player2").text(rollResult);
    scoreForTurnPlayer2 = addRolls(scoreForTurnPlayer2, rollResult);
    $("p#turn-score-player2").text(scoreForTurnPlayer2);
  })
});

// Back end logic

var roll = function () {
  var integer = Math.floor(Math.random() * (6 - 1)) + 1;
  return integer;
}

var addRolls = function (currentScore, rollResult) {
  var scoreForTurn = currentScore + rollResult;
  return scoreForTurn;
}
