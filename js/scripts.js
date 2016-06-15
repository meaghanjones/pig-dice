/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  var scoreForTurn = 0;
  $("form.add-player").submit(function (event) {
    event.preventDefault();
    var playerName = $("input#player-name").val();
    var newPlayer = new Player(playerName, 0, 0);
    playerArray.push(newPlayer);
    $(".player-controls").append("<div class='row'><h2>" + playerArray[playerArray.length-1].name + "</h2><button type='button' name='roll' class='btn btn-primary roll player" + playerArray.length + "' id='roll-player" + playerArray.length + "' value='" + playerArray.length + "'>Roll</button><button type='button' name='hold' class='btn btn-primary hold player" + playerArray.length + "' id='hold-player" + playerArray.length + "' value='" + playerArray.length + "'>Hold</button><div id='output-player" + playerArray.length + "'><p id='roll-result-player" + playerArray.length + "'></p><p id='turn-score-player" + playerArray.length + "'></p><p id='total-score-player" + playerArray.length + "'></p></div></div>");
    $("input#player-name").val("");
  });

  $(document.body).on('click', "button.roll", function() {
    var playerNumber = $(this).val();
    var rollResult = roll();
    $("p#roll-result-player" + playerNumber).text(rollResult);
    if (rollResult === 1) {
      scoreForTurn = 0;
      $("p#turn-score-player" + playerNumber).text(scoreForTurn);
      nextTurn();
    } else {
      scoreForTurn = addRolls(scoreForTurn, rollResult);
      $("p#turn-score-player" + playerNumber).text(scoreForTurn);
    }

  });

  $(document.body).on('click', "button.hold", function() {
    var playerNumber = $(this).val();
    playerArray[playerNumber-1].totalScore = hold(scoreForTurn, playerArray[playerNumber-1].totalScore)
    $("p#total-score-player" + playerNumber).text(playerArray[playerNumber-1].totalScore);
    if (playerArray[playerNumber-1].totalScore >= 100) {
      alert ("You Win!!!");
    }
    scoreForTurn = 0;
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
  // $("button.player1").toggle();
  // $("button.player2").toggle();
}



// Back end logic
var playerArray = [];

var Player = function (name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

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
