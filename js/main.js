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
  $('input[name="removeLowest"]').prop('checked', false);
  $('input[name="manualSelect"]').prop('checked', false);
  $('li.defaultDice').click(function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $('.defaultDice').removeClass('selected');
      $(this).addClass('selected');
    };
  });
  $('#roll').click(function() {
    if ($('#quantityDice').val() !== '' 
      && parseInt($('#quantityDice').val()) !== 'NaN' 
      && parseInt($('#quantityDice').val()) !== 0 
      && parseInt($('#quantityDice').val()) > 0) {
        quantityDice = parseInt($('#quantityDice').val());
      } else {
        alert('Please choose how many dice you\'d like to roll!');
        $('#quantityDice').val('');
        return;
      };
    if (!$('.manualInput').hasClass('hidden')) {
      if ($('#numberSides').val() != ''
        && parseInt($('#numberSides').val()) !== 'NaN' 
        && parseInt($('#numberSides').val()) !== 0 
        && parseInt($('#numberSides').val()) > 0) {
          numberSides = parseInt($('#numberSides').val());
        } else {
          alert('Please choose how many sides your dice should have!');
          $('#numberSides').val('');
          return;
        };
    } else {
      if ($('.selected').length > 0) {
        numberSides = $('.selected').attr('number');
      } else {
        alert('Please select a die to roll!');
        return;
      };
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
    $('#quantityDice').val('');
    $('.defaultDice').removeClass('selected');
    $('#numberSides').val('');
  });
  $('input[name="manualSelect"]').click(function() {
    if($(this).is(':checked')) {
      $('ul.defaultDice').addClass('hidden');
      $('li.manualInput').removeClass('hidden');
      $('#numberSides').val($('.selected').attr('number'));
    } else {
      $('ul.defaultDice').removeClass('hidden');
      $('li.manualInput').addClass('hidden');
      $('#numberSides').val('');
    };
  });
  $('input[name="removeLowest"]').click(function() {
    if($(this).is(':checked')) {
      alert('This isn\'t working yet!');
      $('input[name="removeLowest"]').prop('checked', false);
    };
  });
});
