// 'use strict'
$(document).ready(function() {
  $('#textarea').on('input', function(event) {
    var counter = event.target.value.length;
    var inputLength = 140 - counter;
    $('#counter').text(inputLength);
    console.log($('#counter'));
      if(inputLength < 0) {
        $('#counter').css( {'color': 'red' } );
      }
      if(inputLength > 0) {
        $('#counter').css( {'color': 'black' } );
      }
});});
