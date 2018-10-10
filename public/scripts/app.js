
$(document).ready(function() {

  loadTweets()
  function createTweetElement(tweet) {
    var $article = $("<article>").addClass('posted-tweet');
    var $header = $("<header>").addClass('tweet-header');
    var $paragraph = $("<p>").text(tweet.content.text).addClass('article-textarea');
    var $footer = $("<footer>").addClass('tweet-footer');

    var $usernameAndnickname = $("<div>").addClass('username-and-nickname');
    var $image = $("<img>").attr("src", tweet.user.avatars.small).addClass('profile-pic');
    var $username = $("<h1>").text(tweet.user.name).addClass('user-name');
    var $idName = $("<p>").text(tweet.user.handle).addClass('handle');


    var $timeAgo = $("<span>").text(tweet.created_at);
    var $icons = $("<span>").addClass('icons');
    var $iconFlag = $("<i>").addClass('fas fa-flag');
    var $iconRecycle = $("<i>").addClass('fas fa-recycle');
    var $iconHeart = $("<i>").addClass('fas fa-heart');


    $header.append($image, $usernameAndnickname);
    $usernameAndnickname.append($username, $idName);
    $icons.append($iconFlag,$iconRecycle,$iconHeart);
    $footer.append($timeAgo, $icons);
    $article.append($header,$paragraph,$footer);

    return $article;
  }

  function renderTweets (tweets) {
    tweets.forEach(function(tweet) {
      const $tweet = createTweetElement(tweet);
      $("#posted-tweet-main").prepend($tweet);
    });
  }

  $('form').submit(function (event) {
    event.preventDefault();
    if($('#textarea').val().length > 140) {
      alert('over 140characrters')
    } else if ($('#textarea').val().length === 0 || $.trim($('#textarea').val()) === "") {
      alert('no text input')
    } else {
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
      .then(function (response) {
        console.log('Success: ', response);
        loadTweets(response);
      });
    }
  })

function loadTweets() {
  $.ajax('/tweets', { method: 'GET'})
  .then(function (arrayOfTweets) {
    console.log('Success: ', arrayOfTweets);
    $('#posted-tweet-main').empty();
    renderTweets(arrayOfTweets);
  })
}

});
