/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  var scoreForTurn = 0;
  $("button#roll-player1").click(function () {
    var rollResult = roll();
    $("p#roll-result-player1").text(rollResult);
    scoreForTurn = addRolls(scoreForTurn, rollResult);
    $("p#turn-score-player1").text(scoreForTurn);
  })
  $("button#roll-player2").click(function () {
    var rollResult = roll();
    $("p#roll-result-player2").text(rollResult);
    scoreForTurn = addRolls(scoreForTurn, rollResult);
    $("p#turn-score-player2").text(scoreForTurn);
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
