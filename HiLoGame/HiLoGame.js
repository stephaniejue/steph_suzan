$(document).ready(function () {

  $("#submit").on("click", function () {
    $("p").append(guess());
    $("#question").text($("#question").val(""));
  });

var answer = Math.floor((Math.random() * 100) + 1);
var attempts = 0;

function guess() {
  var guess = parseInt($("input").val());
  console.log("");
  console.log ("Answer: " + answer);
  console.log ("Attempts: " +attempts);
  if (attempts === 5) {
    $("p").addClass("twoguesses");
  }
  if (guess < answer && attempts < 7){
    attempts += 1;
    return " Too low <br />";
  }
  else if (guess > answer && attempts < 7){
    attempts += 1;
    return " Too high <br />";
  }
  else if (guess === answer && attempts < 7) {
    $("button").hide();
    $("input").hide();
    return " That's right <br />";
  }
  else if (isNaN(guess) && attempts < 7) {
    return " Please input a number <br />";
  }
  else {
    $("button").hide();
    $("input").hide();
    return " You're out of tries, you're terrible at this <br />";
  }
}

});
