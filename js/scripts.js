/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  var scoreForTurn = 0;
  $("form.add-player").submit(function (event) {
    event.preventDefault();
    var playerName = $("input#player-name").val();
    var newPlayer = new Player(playerName, 0);
    playerArray.push(newPlayer);
    $(".player-controls").append("<div class='row'><h2>" + playerArray[playerArray.length-1].name + "</h2><button type='button' name='roll' class='btn btn-primary roll player" + playerArray.length + "' id='roll-player" + playerArray.length + "' value='" + playerArray.length + "'>Roll</button><button type='button' name='hold' class='btn btn-primary hold player" + playerArray.length + "' id='hold-player" + playerArray.length + "' value='" + playerArray.length + "'>Hold</button><div id='output-player" + playerArray.length + "'><p class = 'output' id='roll-result-player" + playerArray.length + "'></p><p class = 'output' id='turn-score-player" + playerArray.length + "'></p><p class = 'output' id='total-score-player" + playerArray.length + "'></p></div></div>");
    $(".start-game").show();
    $("input#player-name").val("");
  });

  $(document.body).on('click', "button.roll", function() {
    var playerNumber = parseInt($(this).val());
    var rollResult = roll();
    $("p#roll-result-player" + playerNumber).text(rollResult);
    if (rollResult === 1) {
      scoreForTurn = 0;
      $("p#turn-score-player" + playerNumber).text(scoreForTurn);
      nextTurn(playerNumber);
    } else {
      scoreForTurn = addRolls(scoreForTurn, rollResult);
      $("p#turn-score-player" + playerNumber).text(scoreForTurn);
    }
      $("p#total-score-player" + playerNumber).text(playerArray[playerNumber-1].totalScore);
  });

  $(document.body).on('click', "button.hold", function() {
    var playerNumber = parseInt($(this).val());
    playerArray[playerNumber-1].totalScore = hold(scoreForTurn, playerArray[playerNumber-1].totalScore)
    $("p#total-score-player" + playerNumber).text(playerArray[playerNumber-1].totalScore);
    if (playerArray[playerNumber-1].totalScore >= 100) {
      alert ("You Win!!!");
    }
    scoreForTurn = 0;
    nextTurn(playerNumber);
  });

  $("button#new-game").click(function () {
    scoreForTurn = 0;
    $(".player-controls").text("");
    playerArray.length = 0;
    $("form.add-player").show();
    $(".start-game").hide();
  })

  $(document.body).on('click', "button#start-game", function() {
    startGame();
})

});

var nextTurn = function (playerNumber) {
$("button.player" + playerNumber).toggle();
  if (playerNumber === playerArray.length) {
    playerNumber = 0;
  }
  var nextPlayerNumber = playerNumber + 1
  $("button.player" + nextPlayerNumber).toggle();
}

var startGame = function () {
  $("form.add-player").hide();
  $(".start-game").hide();
  $("button.player1").show();
}

// Back end logic
var playerArray = [];

var Player = function (name, totalScore) {
  this.name = name;
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
