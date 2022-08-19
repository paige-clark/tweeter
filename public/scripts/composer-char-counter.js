// this code creates the functionality of the character counter
$(document).ready(function() {

  const maxCounter = 140;
  let $remainingChar;

  $("#tweet-text").on('input', function() {
    let numberOfLetters = $(this).val().length;
    $remainingChar = maxCounter - numberOfLetters;
    let $counter = $(this).parent().find('.counter');
    $counter.text($remainingChar);
    if ($remainingChar < 0) {
      $counter[0].classList.add("red-counter-text");
    }
    if ($remainingChar > 0) {
      $counter[0].classList.remove("red-counter-text");
    }
  });
});