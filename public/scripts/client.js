/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// populates tweet field
$(document).ready(function () {

  const renderTweets = function(tweets) {
    let newArray = [];
    for (const tweet of tweets) {
      newArray.push(createTweetElement(tweet));
      // $('#tweets-container').prepend(createTweetElement(tweet));
    }
    newArray.reverse();
    $('#tweets-container').html(newArray);
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
          ${timeago.format(tweetData["created_at"])}
          </div>
          <div class="footer-icons">
            <span><i class="fa-solid fa-flag hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-retweet hover-color fa-xs"></i></span>
            <span><i class="fa-solid fa-heart hover-color fa-xs"></i></span>
          </div>
        </footer>
      </article>`
  }

  // error handler
  const errorHandler = function (message) {
    let errorMessage = $('#error').text(`${message}`);
    if (message !== '') {
      $('.error-style').css('bottom', '0%')
    }
    if (message === '') {
      $('.error-style').css('bottom', '100%')
    }
    errorMessage;
  };

  //escape function for making sure people can't run scrips
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // submit a form with AJAX and jQuery
  $("form").on("submit", function(event) {
    event.preventDefault();

    let userText = escape($('#tweet-text').val());
    let userData = { text: userText }

    // input validation
    if(userText === ''){
      return errorHandler('Text field empty!');
    }
    if(userText === null){
      return errorHandler('Text field null!');
    }
    if(userText.length > 140){
      return errorHandler('Tweet is too long!');
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: userData, // was $(this).serialize()
      success: function(response) {
        errorHandler('')
        $remainingChar = 140;
        $(".counter").val($remainingChar);
        $("#tweet-text").val('');
        loadTweets();
      }
      //CONSIDER ADDING SUCCESS AND ERROR HANDLERS?
    });
  });

  // make AJAX GET request for /tweets database
  const loadTweets = function () {
    $.ajax({
      type: "GET",
      url: '/tweets',
      success: function(data) {
        renderTweets(data)
      }
    })
  };
  loadTweets();
});