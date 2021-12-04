// Calculate The Character Count

$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    let textLength = $(this).val().length;        //jquery
    let $counter = $(".counter");         //jquery
    $counter.text(140 - textLength);
    if (textLength > 140) {
      $counter.css('color', 'red');
    } else {
      $counter.css('color', 'black');
    }
  })
});