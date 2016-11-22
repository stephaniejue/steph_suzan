$(document).ready(function () {

  $("#submit").on("click", function () {
    alert("You clicked this!");
    console.log($("input").val());
    $("p").text(eightBall());
    $("#question").text($("#question").val(""));

  });
});


function eightBall() {
  var responses = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Nah, fam"]
  var responseNum = (Math.floor((Math.random() * 6) + 1)) - 1;
  var response = responses[responseNum];
  var question = $("input").val();
  if (question === "STOP") {
    return "";
  } else {
    return response;
  }
}
