var numberSides = 0;
var quantityDice = 0;
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
  $('#resultsField').prepend(
      '<div class="result">' +
      '<p>' + arrangeResultsList(resultsList) + '</p>' +
      '<div class="totalDiv">' +
      '<span class="total">= ' + total + '</span>' +
      '<span class="resultsTag">' + quantityDice+ 'd' + numberSides + '</span>' +
      '</div>' +
      '</div>');
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
    if ($('#quantityDice').val() !== '' 
      && parseInt($('#quantityDice').val()) !== 'NaN' 
      && parseInt($('#quantityDice').val()) !== 0 
      && parseInt($('#quantityDice').val()) > 0) {
      quantityDice = parseInt($('#quantityDice').val());
    } else {
      alert('Please choose how many dice you\'d like to roll!');
      return;
    };
    if ($('#numberSides').val() != '') {
      numberSides = $('#numberSides').val();
    } else {
      numberSides = 6;
    };
    rollDice(numberSides, quantityDice);
    printResults(resultsList, total);
  });
  $('a.advancedOptions').click(function() {
    if ($('ul.advancedOptions').hasClass('hidden')) {
      $('ul.advancedOptions').removeClass('hidden');
    } else {
      $('ul.advancedOptions').addClass('hidden');
    };
  });
  $('#clear').click(function() {
    $('#resultsField').empty();
  });
});
