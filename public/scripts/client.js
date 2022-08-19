/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // focus the text field when the top right of the nav bar is clicked
  $(".nav-right").on("click", function(event) {
    $("textarea").focus();
  });

  // populates the tweet field with user tweets
  const renderTweets = function(tweets) {
    let newArray = [];
    for (const tweet of tweets) {
      newArray.push(createTweetElement(tweet));
    }
    newArray.reverse();
    $('#tweets-container').html(newArray);
  };

  // generates tweet html based on database objects
  const createTweetElement = function(tweetData) {
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
          ${timeago.format(tweetData["created_at"])}
          </div>
          <div class="footer-icons">
            <span><i class="fa-solid fa-flag hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-retweet hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-heart hover-color fa-xs"></i></span>
          </div>
        </footer>
      </article>`;
  };

  // error handler function that calls error css
  const errorHandler = function(message) {
    let errorMessage = $('#error').text(`${message}`);
    if (message !== '') {
      $('.error-style').css('bottom', '0%');
    }
    if (message === '') {
      $('.error-style').css('bottom', '100%');
    }
    errorMessage;
  };

  // escape function for making sure people can't run scripts
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // submit a form with AJAX and jQuery
  $("form").on("submit", function(event) {
    event.preventDefault();

    let userText = escape($('#tweet-text').val());
    let userData = { text: userText };

    // input validation
    if (userText === '') {
      return errorHandler('Text field empty!');
    }
    if (userText === null) {
      return errorHandler('Text field null!');
    }
    if (userText.length > 140) {
      return errorHandler('Tweet is too long!');
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: userData,
      success: function() {
        errorHandler('');
        $remainingChar = 140;
        $(".counter").val($remainingChar);
        $("#tweet-text").val('');
        return loadTweets();
      }
    });
  });

  // make AJAX GET request to populate the tweet field
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: '/tweets',
      success: function(data) {
        renderTweets(data);
      }
    });
  };
  loadTweets();

});