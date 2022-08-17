/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1660584971910
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1660671371910
    }
  ]
// populates tweet field
$(document).ready(function () {

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

  const createTweetElement = function (tweetData) {
    return `<article>
        <header>
            <div class="header-left">
              <img src="${tweetData.user.avatars}" alt="profile picture">
              <p>${tweetData.user.name}</p>
            </div>
            <p>${tweetData.user.handle}</p>
        </header>
        <p class="tweet-paragraph">${tweetData.content.text}</p>
        <footer>
          <div class="footer-date">
          ${tweetData["created_at"]}
          </div>
          <div class="footer-icons">
            <span><i class="fa-solid fa-flag hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-retweet hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-heart hover-color fa-xs"></i></span>
          </div>
        </footer>
      </article>`
  }

  renderTweets(data);
});

// submit a form with AJAX and jQuery
$(document).ready(function () {

  $("form").on("submit", function(event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
      // success: (response) => {
      //   console.log(response.results);
      // },
      // // dataType: 'string'
    });

  });

});