
$(document).ready(function(){
  // var $body = $(".tweets");

  // var index = streams.home.length - 1;
  //   while(index >= 0) {
  //     var tweet = streams.home[index];
  //     var $tweet = $('.tweet-container');
  //     // $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //     $(".toggle-user p").html(tweet.user);
  //     $(".user-tweet p").text(tweet.message);
  //     // $tweet.append($("body"));
  //     // $tweet.appendTo($("body"));

  //     index -= 1;
  //   }

  //           var index = streams.home.length - 1;
  //       while(index >= 0){
  //         var tweet = streams.home[index];
  //         var $tweet = $('<div></div>');
  //         $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //         $tweet.appendTo($body);
  //         index -= 1;
  //       }
  //     });


// click to get new tweets
  $(".get-new-tweets").click(function() {
    var index = streams.home.length - 1;
    var username = streams.users;
    var $user = $('.toggle-user p');
    var $tweet = $('.user-tweet p');
      $user.html('@' + randomElement(users));
      $tweet.text(randomMessage());
  });

// // click to get new tweets
//   $(".get-new-tweets").click(function() {
//       var username = streams.users;
//       var $tweet = $("<div></div>");
//       $(".tweets").append(append_tweets);
//       $(".toggle-user p").html(randomElement(users));
//       $(".user-tweet p").text(randomMessage());
//   })

// user headline switch with "current" user
  $(".list-group-item").click(function() {
    var currentUser = $(".current-user").html().replace("username", $(".list-group-item"));
    $(".current-user").html(currentUser);
  });

// click to toggle specific user feed
  $(".toggle-user").click(function() {
    console.log("on click, display only this user's tweets");
    // $(".toggle-user p").text(function (){
    //   return $(this).text().replace("username", tweet.user)
    // });
  });

});

var appendTweets = 
    "<div class='col-md-12 tweet-container'>\
      <div class='col-md-3 user-info'>\
        <a href='#' class='toggle-user'><p>username</p></a>\
      </div>\
      <div class='col-md-6'></div>\
      <div class='col-md-3 timestamp'>\
        <p>date/time created</p>\
      </div>\
      <div class='col-md-12 user-tweet'>\
        <p>tweet tweet tweet</p>\
      </div>\
    </div>";