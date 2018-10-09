
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
function renderTweets (tweets) {
  tweets.forEach(function(tweet) {
    const $tweet = createTweetElement(tweet);
    $("#posted-tweet-main").append($tweet);
  });
}
renderTweets(data)

function createTweetElement(tweet) {
  var $article = $("<article>").addClass('posted-tweet');
  var $header = $("<header>").addClass('tweet-header');
  var $paragraph = $("<p>").text(tweet.content.text).addClass('article-textarea');
  var $footer = $("<footer>").addClass('tweet-footer');

  var $userameAndnickname = $("<div>").addClass('username-and-nickname');
  var $image = $("<img>").attr("src", tweet.user.avatars.small).addClass('profile-pic');
  var $username = $("<h1>").text(tweet.user.name).addClass('user-name');
  var $idName = $("<p>").text(tweet.user.handle).addClass('handle');


  var $timeAgo = $("<span>").text(tweet.created_at);
  var $icons = $("<span>").addClass('icons');
  var $iconFlag = $("<i>").addClass('fas fa-flag');
  var $iconRecycle = $("<i>").addClass('fas fa-recycle');
  var $iconHeart = $("<i>").addClass('fas fa-heart');


  $header.append($image, $userameAndnickname);
  $userameAndnickname.append($username, $idName);
  $icons.append($iconFlag,$iconRecycle,$iconHeart);
  $footer.append($timeAgo, $icons);
  $article.append($header,$paragraph,$footer);

  return $article;
}

});
