/*This file is for your custom js.  All yours*/

// Front end logic

$(document).ready(function(){
  $("button#roll").click(function () {
    var rollResult = roll();
    $("#output").text(rollResult);
  })

});

// Back end logic

var roll = function () {
  var integer = Math.floor(Math.random() * (6 - 1)) + 1;
  return integer;
}
