console.log(`char counter loaded!`);
// let counter = 140;

$(document).ready(function () {

  const maxCounter = 140;
  let $remainingChar;

  $("#tweet-text").on('input', function () {
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


// console.log(this);

/*
TODO:
INPUT : character strokes from a user
- register input with keyup (should this be input? internet said keyup bad)
  * if anything other than backspace is pressed, counter --
  * if backspace is pressed, counter ++
    * counter can't go higher than max
    * 
OUTPUT: for each letter entered, subtract one from the 140
        character limit and add one for each backspace if counter
        is less than 140.


I KNOW:
- focus is for when you're on the text field
- blur is for when you're off the text field

THINGS TO TRY:
blur event
keydown event
keyup event
keypress event
change event
input event
*/