/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Test / driver code (temporary). Eventually will get this from the server.



$(document).ready(function() {
const createTweetElement = function(tweet) {
  console.log(tweet);
  let $tweet = `<article class="tweet">
  <header >
    <div class="imgandname"> 
      <img src="${tweet.user.avatars}"/>
      <span class="username">${tweet.user.name}</span>
    </div>
    <span class="userhandle">${tweet.user.handle}</span>
  </header>
  <h3>${tweet.content.text}</h3>
  <footer>
    <h5>${timeago.format(tweet.created_at)} </h5>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`
  return $tweet;
}


const renderTweets = function(tweets) {
  
  for (const tweet of tweets) {
    console.log(tweet)
    const newTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(newTweet);
  }
}

const loadTweets = function () {
  // $("#tweet-text").val('');        jquery to empty textarea
  // $(".counter").text(140);         jquery to reset charactercount

  $.ajax({
  url: `/tweets`,
  method: 'GET',
  })
  .then(function (tweetresponse){
  renderTweets(tweetresponse);
  document.querySelector("#tweet-text").value = '';       //empty textarea
  document.querySelector(".counter").innerHTML = 140;     //reset charactercount

  });
  
}

$( "#tweet__id" ).on('submit', (event) => {
  event.preventDefault();
  const formData = $( 'form' ).serialize();
  let textLength = $('#tweet-text').val().length;
  if( textLength === 0) {
    $('.error__empty').slideDown('slow').hide(3500);
  } else if(textLength > 140) {
    $('.error__long').slideDown('slow').hide(3500);
  } else {
    $.ajax({
      type: "POST",
      url: `/tweets`,
      data: formData,
      success: loadTweets()  
    });
  }
});

loadTweets();
});















