/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  $("button#roll-player1").click(function () {
    var rollResult = roll();
    $("#output-player1").text(rollResult);
  })
  $("button#roll-player2").click(function () {
    var rollResult = roll();
    $("#output-player2").text(rollResult);
  })
});

// Back end logic

var roll = function () {
  var integer = Math.floor(Math.random() * (6 - 1)) + 1;
  return integer;
}
