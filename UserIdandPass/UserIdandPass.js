$(document).ready(function () {

  $("#submit").on("click", function () {
    $("p").text(getInput());

  });

var attempts = 0;


function passNotSame(pw) {
  return pw !== "password";
}

function checkChar(x) {
  return (x.includes("#") || x.includes("!") || x.includes("$"));
}

function length(id, pw) {
  return (id.length >= 6 && pw.length >= 6)
}

function chars(id, pw) {
  return (!checkChar(id) && checkChar(pw))
}

function notSame(id, pw) {
  return (id !== pw)
}

function passChars(pw) {
  return (pw.toLowerCase() !== pw && pw.toUpperCase() !== pw)
}

function passNums(pw) {
  count = 0;
  for (i=0; i<pw.length; i++) {
    char = pw[i];
    if (!isNaN(parseInt(char))) { count ++ }
  }

  return count>0;
}

//------- EVALUATE INPUT ---------//

function getInput() {
  $("p").text("");
  attempts += 1;

  if (attempts > 5) {
    $("button").hide();
    $("input").hide();
    $("p").text("You're out of tries, you're terrible at this");
  }

  var uname = $("#userid").val();
  var pass = $("#password").val();

  console.log("Username: " + uname);
  console.log("Password: " +pass);

  if (passNotSame(pass) && length(uname, pass) && chars(uname, pass) && notSame(uname, pass) && passChars(pass) && passNums(pass)) {
    return "Valid";
  }


  if (!passNotSame(pass)) {
    $("p").append("Your password cannot be password <br />");
    $("#password").text($("#password").val(""));
  }
  if (!length(uname, pass)) {
    $("p").append("Your password or ID has is less than 6 characters <br />");
    //this clears the inputs if the password or Id is invalid
    $("#password").text($("#password").val(""));
    $("#userid").text($("#userid").val(""));
  }
  if (!chars(uname, pass)) {
    $("p").append("Your password or ID has invalid characters <br />");
    //this clears the inputs if the password or Id is invalid
    $("#password").text($("#password").val(""));
    $("#userid").text($("#userid").val(""));
  }
  if (!notSame(uname, pass)) {
    $("p").append("Your user ID and password cannot be the same <br />");
    //this clears the inputs if the password or Id is invalid
    $("#password").text($("#password").val(""));
    $("#userid").text($("#userid").val(""));
  }
  if (!passChars(pass)) {
   $("p").append("Your password must have at least one upper case and one lower case letter <br />");
   //this clears the inputs if the password or Id is invalid
   $("#password").text($("#password").val(""));
   }
  if (!passNums(pass)) {
    $("p").append("Your password must have at least one number <br />");
    //this clears the inputs if the password or Id is invalid
    $("#password").text($("#password").val(""));
  }
}

});
