var a = "Click the refresh buttton again and again to play the game!";
alert(a);
var random_number = Math.floor(Math.random()*6)+1;
var random_choice = "images/dice"+random_number+".png";
var changing_attribute = document.querySelectorAll("img")[0];
changing_attribute.setAttribute("src",random_choice);

var random_number1 = Math.floor(Math.random()*6)+1;
var random_choice1 = "images/dice"+random_number1+".png";
var changing_attribute1 = document.querySelectorAll("img")[1];
changing_attribute1.setAttribute("src",random_choice1);

if (random_number === random_number1) {
    document.querySelector("h1").innerHTML = " Match tied 🙉👻";
  } else if (random_number>random_number1) {
     document.querySelector("h1").innerHTML = "Person 1 won 🥳🔥";
  } else {
    document.querySelector("h1").innerHTML = "Person 2 won 🥳🔥";
  }
  







 



