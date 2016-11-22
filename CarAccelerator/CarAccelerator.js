$(document).ready(function () {

  $("#submit").on("click", function () {
    $("div").eq(0).hide();
    createCar();
  });

  var speed = 0;

  function createCar() {
    var newYear = $("#year").val();
    var newMake = $("#make").val();
    var newModel = $("#model").val();

    console.log("year: " + newYear);
    console.log("make: " + newMake);
    console.log("model: " + newModel);

    return {
      getInfo: function() {
        return "Car Info: " + newYear + " " + newMake + " " + newModel;
      },

      getSpeed: function() {
        return speed;
      },

      accelerate: function(x) {
        if (myCar.getSpeed() > 75) {
          x = 85-myCar.getSpeed();
        }
        speed += x;
      },

      brake: function() {
        speed -= Math.floor(Math.random() * (speed / 2));

        if (speed < 7) {
          speed = 0;
        }
      }
    };
  }

function createObject {
  var myCar = createCar(newYear,newMake,newModel);
}
  //
  // console.log("my car: " + this.myCar);
  // $("#carinfo").text(myCar.getInfo());


  // var carString = myCar.getInfo();
  // // myCar.getInfo();
  //
  // console.log(carString);
  // document.getElementById("outputText").innerHTML = "Youre driving a " +
  //
  //
  //
  // function getInput() {
  //
  //   var input = document.getElementById("inputField").value;
  //
  //   if (input === "accelerate") { myCar.accelerate(80); }
  //   if (input === "brake" ) { myCar.brake() }
  //
  //   document.getElementById("outputText").innerHTML = "Your speed is " + speed;
  // }





});
