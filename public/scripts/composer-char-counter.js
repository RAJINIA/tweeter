
$(document).ready(function() {
  console.log("Testing the file");
  $("#tweet-text").keyup(function() {
    let textLength = $(this).val().length;        //jquery
    // console.log($(".counter"))
    let $counter = $(".counter");         //jquery
    $counter.text(140 - textLength);
    if (textLength > 140) {
      $counter.css('color', 'red');
    } else {
      $counter.css('color', 'black');
    }
  })
});