/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  // var scoreForTurnPlayer1 = 0;
  // var totalScorePlayer1 = 0;
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
      playerArray[playerNumber-1].turnScore = 0;
      $("p#turn-score-player" + playerNumber).text(playerArray[playerNumber-1].turnScore);
      nextTurn();
    } else {
      $("p#turn-score-player" + playerNumber).text(addRolls(playerArray[playerNumber-1].turnScore, rollResult));
    }
    $(document.body).on('click', "button.hold", function() {
      // var playerNumber = $(this).val();
      $("p#total-score-player" + playerNumber).text(hold(playerArray[playerNumber-1].turnScore, playerArray[playerNumber-1].totalScore));
      if (playerArray[playerNumber-1].totalScore >= 100) {
        alert ("You Win!!!");
      }
      playerArray[playerNumber-1].turnScore = 0;
      nextTurn();
    });
  });


  //
  // var scoreForTurnPlayer2 = 0;
  // var totalScorePlayer2 = 0;
  // $("button#roll-player2").click(function () {
  //   var rollResult = roll();
  //   $("p#roll-result-player2").text(rollResult);
  //   if (rollResult === 1){
  //     scoreForTurnPlayer2 = 0;
  //     $("p#turn-score-player2").text(scoreForTurnPlayer2);
  //     nextTurn();
  //   } else {
  //     scoreForTurnPlayer2 = addRolls(scoreForTurnPlayer2, rollResult);
  //     $("p#turn-score-player2").text(scoreForTurnPlayer2);
  //
  //     }
  // });
  //
  // $("button#hold-player2").click(function () {
  //   totalScorePlayer2 = hold(scoreForTurnPlayer2, totalScorePlayer2);
  //   $("p#total-score-player2").text(totalScorePlayer2);
  //   if (totalScorePlayer2 >= 100){
  //     alert ("You Win!!!");
  //   }
  //   scoreForTurnPlayer2 = 0;
  //   nextTurn();
  // });

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
   debugger;
   totalScore = totalScore + scoreForTurn;
   return totalScore;
 }
