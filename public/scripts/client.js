/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Test / driver code (temporary). Eventually will get this from the server.


// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1637017216171
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1637103616171
//   }
// ]

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
  $.ajax({
  url: `/tweets`,
  method: 'GET',
  })
  .then(function (tweetresponse){
  renderTweets(tweetresponse);
  });
}


$( "#tweet__id" ).on('submit', (event) => {
  event.preventDefault();
  // console.log("hello");
  const formData = $( 'form' ).serialize();
  // console.log(this);
  // console.log(formData);
  // let textLength = $('tweet-text').val().length;
  if( $form.find('#tweet-text').val().length === 0) {
    $(".errorShort").fadeIn('slow')
    // alert("Empty tweet Message!");
  } else if($form.find('#tweet-text').val().length > 140) {
    $(".errorLong").fadeIn('slow')
    // alert("Tweet Exceeding The Maximum Characters!");
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











// $(document).ready(function() {
  // const $tweet = createTweetElement(tweetData);
  // renderTweets(tweetData);
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet);             // to add it to the page so we can make sure it's got all the right elements, classes, etc.
//  });



