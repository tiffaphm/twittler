
$(document).ready(function(){

// click to get new tweets
  $(".get-new-tweets").click(function() {
    var username = streams.users;
    var tweet = $(".user-tweet p");
    $(".tweets").prepend(addTweets);
    $(".toggle-user p").replaceWith(randomElement(users));
    $(".user-tweet p").replaceWith(randomMessage());
    $(".timestamp p").replaceWith(timestampForTweet);

    // $(".toggle-user").click(function() {
    //   $(".tweet-container").hide();
    //   var username = $(".toggle-user").text();
    //   if ($('.toggle-user:contains("sharksforcheap")')) {
    //     $('.tweet-container:contains("sharksforcheap")').show();
    //   } else if ($('.toggle-user:contains("shawndrost")')) {
    //     $('.tweet-container:contains("shawndrost")').show();
    //   } else if ($('.toggle-user:contains("mracus")')) {
    //     $('.tweet-container:contains("mracus")').show();
    //   } else if ($('.toggle-user:contains("douglascalhoun")')) {
    //     $('.tweet-container:contains("douglascalhoun")').show();
    //   } else {
    //     $(".tweet-container").show();
    //   }
    // });

// click username on tweet to get to profile
// need to fix something "toggle-user" selector to specify only the username clicked
  //   $(".toggle-user").click(function() {
  //     $(".tweet-container").hide();
  //     var username = $(".toggle-user:first").text();
  //     console.log(username);
  //     if ($('.toggle-user:contains("'+username+'")')) {
  //       $('.tweet-container:contains("'+username+'")').show();
  //     }
  //   });
  });

// click to change to user profile & timeline

  $(".sharks.list-group-item").click(function() {
    $(".current-user").replaceWith("<h1 class='current-user'>sharksforcheap</h1>");
    var username = "sharksforcheap";
    $(".tweet-container").hide();
    $('.tweet-container:contains("'+username+'")').show();
  });

  $(".shawn.list-group-item").click(function() {
    $(".current-user").replaceWith("<h1 class='current-user'>shawndrost</h1>");
    var username = "shawndrost";
    $(".tweet-container").hide();
    $('.tweet-container:contains("'+username+'")').show();
  });

  $(".mracus.list-group-item").click(function() {
    $(".current-user").replaceWith("<h1 class='current-user'>mracus</h1>");
    var username = "mracus";
    $(".tweet-container").hide();
    $('.tweet-container:contains("'+username+'")').show();
  });

  $(".douglas.list-group-item").click(function() {
    $(".current-user").replaceWith("<h1 class='current-user'>douglascalhoun</h1>");
    var username = "douglascalhoun";
    $(".tweet-container").hide();
    $('.tweet-container:contains("'+username+'")').show();
  });

});

//global variables

var timestampForTweet = moment().format('MMMM Do YYYY, h:mm a');

var addTweets = 
    "<div class='col-md-12 tweet-container'>\
      <div class='col-md-3 user-info'>\
        <a href='#' class='toggle-user'><p></p></a>\
      </div>\
      <div class='col-md-6'></div>\
      <div class='col-md-3 timestamp'>\
        <p></p>\
      </div>\
      <div class='col-md-12 user-tweet'>\
        <p></p>\
      </div>\
    </div>";