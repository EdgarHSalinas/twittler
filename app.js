$(document).ready(function(){
 var $body = $('body');
 var $button = $('#refresh');
 var $tweets = $('#tweets');
 var $submit = $('#send-tweet');
 var $tweetWriter = $('#tweet-writer');

 // build new jquery twee object
 var buildTweet = function(tweet) {
   var $tweet = $('<div class="tweet"></div>');
   $tweet.addClass('tweet');

   // clickable username
   var $username = $('<a class="username" data-user="' + tweet.user + '"></a>');
   $username.text('@' + tweet.user);

  
   var $tweetText = $('<p class="tweetText">'+ tweet.message +'</p>');

   
   var $creationTime = $('<span class="creation-time"></span>');
   
   $username.prependTo($tweet);
   $tweetText.appendTo($tweet);
   $creationTime.appendTo($tweet);
   $creationTime.livestamp(tweet.created_at);
   return $tweet;
 };
  
 var lastNewest = streams.home.length - 1;



 // add latest tweets
 var addNewTweets = function(newest, oldest, collection) {
   if (collection === undefined) {
    collection = streams.home;
   }
   while (oldest <= newest) {
    buildTweet(collection[oldest]).prependTo($tweets);
    oldest++;
   }
   
   latest = newest;
 };

 addNewTweets(streams.home.length - 1, 0);

 $($button).on('click', function(){
   addNewTweets(streams.home.length - 1, lastNewest + 1);
 });
 
 // search on clicked a.username link 
 $('div').on('click', 'a.username', function() {
  var username = $(this).data('user');
  $tweets.empty();
  var userTweets = streams.users[username];
  addNewTweets(userTweets.length - 1, 0, userTweets);
 });

 // submit new tweet
 $submit.on('click', function() {
  window.visitor = $('#visitor-name').val();
  if  (!(visitor in streams.users)) {
    streams.users[visitor] = [];
  }        
  writeTweet($('#visitor-tweet').val());
  addNewTweets(streams.home.length - 1, lastNewest + 1);
  $('#visitor-tweet').val('');
  $tweetWriter.append('<p class="smalltext">Your tweet has been saved</p>');
});
// Toggle tweet Box


$('.tweet-writer-control').click(function() {
 if ($tweetWriter.css('display') === 'block') {
   $tweetWriter.slideUp();
 } else {
   $tweetWriter.slideDown();
 }
});


// scroll to Top 
$('#top').on('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

});
