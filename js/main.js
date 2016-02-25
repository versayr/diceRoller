var numberSides = 6;
var quantityDice = 3;

function rollDice(diceSides, quantityDice) {
  var total = 0;
  for (var i = 0; i < quantityDice; i++) {
    console.log(i);
    var rollResult = 1 + Math.floor(Math.random() * diceSides);
    console.log("Roll Result = " + rollResult);
    total = total + rollResult;
    console.log("Total = " + total);
  };
  $('#total').text(total);
};

$(document).ready(function() {
  $('#roll').click(function() {
    quantityDice = $('#quantityDice').val();
    numberSides = $('#numberSides').val();
    rollDice(numberSides, quantityDice);
  });
});
