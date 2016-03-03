var numberSides = 6;
var quantityDice = 3;
var resultsList = [];
var total = 0;

function rollDice(diceSides, quantityDice) {
  resultsList = [];
  total = 0;
  for (var i = 0; i < quantityDice; i++) {
    var rollResult = 1 + Math.floor(Math.random() * diceSides);
    total = total + rollResult;
    resultsList.push(rollResult);
  };
};

function printResults(resultsList, total) {
  $('#resultsField').prepend('<span>= ' + total + '</span>');
  $('#resultsField').prepend('<p>' + arrangeResultsList(resultsList) + '</p>'); 
};

function arrangeResultsList(resultsList) {
  var resultsListString = '';
  for (var i = 0; i < resultsList.length; i++) {
    if (i != (resultsList.length - 1)) {
      resultsListString += resultsList[i] + ' + ';
    } else {
      resultsListString += resultsList[i];
    };
  };
  return resultsListString;
};

$(document).ready(function() {
  $('#roll').click(function() {
    quantityDice = $('#quantityDice').val();
    numberSides = $('#numberSides').val();
    rollDice(numberSides, quantityDice);
    printResults(resultsList, total);
  });
  $('#clear').click(function() {
    alert('Clear the thing');
  });
});
