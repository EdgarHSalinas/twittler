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

   // time of tweet
   var date = tweet.created_at;
   var mDate = moment().startOf('hour').fromNow();
   console.log(mDate);
   var $creationTime = $('<span class="creation-time">' + date + '</span>');
   $tweet.text(' ' + tweet.message + ' ');
   $username.prependTo($tweet);
   $creationTime.appendTo($tweet);
   // $creationTime.startOf('hour').fromNow();
   return $tweet;
 };

 var lastNewest = streams.home.length - 1;

 // var index = streams.home.length - 1;

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


 // while(index >= 0){
 //   var tweet = streams.home[index];
 //   var $tweet = $('<div></div>');
 //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
 //   $tweet.appendTo($body);
 //   index -= 1;
 // }

});
