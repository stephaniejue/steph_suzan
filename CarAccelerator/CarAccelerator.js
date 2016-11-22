$(document).ready(function () {

  $("#submit").on("click", function () {
    $("div").eq(0).hide();
    createObject();
  });
  $("#increasespeed").on("click", function () {
    speedUp();
  });

  $("#decreasespeed").on("click", function () {
    speedDown();
  });

  $("#maxaccel").on("click", function () {
    maxAccel();
  });

  $("#maxbrake").on("click", function () {
    maxBrake();
  });

  $("#brakesfail").on("click", function () {
    brakesFail();
  });

  var speed = 0;

  function createCar() {
    var newYear = $("#year").val();
    var newMake = $("#make").val();
    var newModel = $("#model").val();

    return {
      make: newMake,
      model: newModel,
      year: newYear,
      getInfo: function() {
        return "You're driving a: " + this.year + " " + this.make + " " + this.model;
      },
      getSpeed: function() {
        console.log("Get Speed: " + speed);
        return speed;
      },
      increaseSpeed: function() {
        speed += 5; // increases speed by increments of 5
        if (speed >= 85) { //checks if speed is great than or equal to 85
          return speed = 85; //if yes, sets speed to 85
        } else {
          return speed; //otherwise outputs speed
        }
        console.log("increaseSpeed: " + speed);
      },
      decreaseSpeed: function() {
        speed -= 5; //decreases speed by increments of 5
        if (speed < 0) { //checks if speed is below 8
          return speed = 0; //if yes, sets speed to 0
        } else {
          return speed; //otherwise outputs speed
        }
      },
      maxAccel: function() {
        while (speed < 70) { //while loop
          speed += 5; //increases speed by increments of 5 while speed is below 70
        }
        return speed; //outputs speed
      },
      maxBrake: function() {
        while (speed > 0) { //while loop
          speed -= 5; //decreases speed by increments of 5 while speed is above 0
        }
        return speed; //outputs speed
      },
      //story 4
      brakesFail: function() {
        var decelerator = Math.floor((Math.random() * speed) + 1); //sets random variable for decelerator
        speed -= decelerator; //sets speed to speed reduced by decelerator
        if (speed < 0) { //if speed goes below 0
          return speed = 0; //sets the speed to 0
        } else {
          return speed; //otherwise output speed
        }
      },
    };
  }

  function createObject() {
    var myCar = createCar();
    console.log("Set speed: " + speed);
    console.log("My Car:" + myCar);
    console.log("My Car Make:" + myCar.make);
    console.log("My Car's Info:" + myCar.getInfo());
    $("#carinfo").text(myCar.getInfo());
  }

  function speedUp() {
    var myCar = createCar();
    console.log("MyCar.getSpeed:" + myCar.getSpeed());
    console.log("MyCar.IncreaseSpeed:" + myCar.increaseSpeed());
    $("#carspeed").text(myCar.getSpeed());
  }
  function speedDown() {
    var myCar = createCar();
    console.log("My Car's Decreased Speed:" + myCar.decreaseSpeed());
    $("#carspeed").text(myCar.getSpeed());
  }

  function maxAccel() {
    var myCar = createCar();
    console.log("My Car's Max Speed:" + myCar.maxAccel());
    $("#carspeed").text(myCar.getSpeed());
  }

  function maxBrake() {
    var myCar = createCar();
    console.log("My Car's Max Brake:" + myCar.maxBrake());
    $("#carspeed").text(myCar.getSpeed());
  }
  function brakesFail() {
    var myCar = createCar();
    console.log("My Car's Failed brakes:" + myCar.brakesFail());
    $("#carspeed").text(myCar.getSpeed());
  }


});
