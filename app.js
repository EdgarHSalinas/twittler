$(document).ready(function(){
 var $body = $('body');
 var $button = $('#refresh');
 var $tweets = $('#tweets');
 var $submit = $('#send-tweet');

 // build new jquery twee object
 var buildTweet = function(tweet) {
   var $tweet = $('<div></div>');
   $tweet.addClass('tweet');

   // clickable username
   var $username = $('<a class="username" data-user="' + tweet.user + '"></a>');
   $username.text('@' + tweet.user);


 };

 var index = streams.home.length - 1;
 while(index >= 0){
   var tweet = streams.home[index];
   var $tweet = $('<div></div>');
   $tweet.text('@' + tweet.user + ': ' + tweet.message);
   $tweet.appendTo($body);
   index -= 1;
 }

});
