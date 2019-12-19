// SET INITIAL COLORS TO RANDOM VARIABLES
var rgb = [];
var mode = 10;
function pushRGB() {
  for (var i = 0; i < mode * 36; i++)
    var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);;
  var b = Math.floor(Math.random() * 256);;
  rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')')
}
var winning = false;
//TRIES
var tries = 0;
var tri = document.querySelector("#tries");
tri.textContent = tries
// MENU CHANGES
//play again
var reset = document.querySelector("#playAgain");
reset.addEventListener("click", function () {
  document.location.reload(true);
})

//POPULATE RGB COLORS LIST
for (var i = 0; i < mode; i++) pushRGB();

// SELECT THE RANDOM GOAL COLOR
var goal = Math.floor(Math.random() * (mode))
var goalColor = rgb[goal];
var goalDisplay = document.querySelector("#rgb");
goalDisplay.textContent = goalColor;

// FILL BACKGROUND COLORS
var square = document.querySelectorAll(".square");
for (var i = 0; i < square.length; i++)
  square[i].style.backgroundColor = rgb[i];

//CREATE EVENT LISTENER FOR CLICK ON A SQUARE
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++)
  squares[i].addEventListener("click", function () {

    // GAME LOGIC
    //if clicked square background matched rgbGoal
    if (this.style.backgroundColor === goalColor) {
      var correctSquare = document.querySelectorAll(".square");
      //cycle through all colors and make them change a few times
      for (var i = 0; i < square.length; i++)
        correctSquare[i].style.backgroundColor = goalColor;
      var header = document.querySelector("h1");
      header.style.backgroundColor = goalColor;
      var message = "You Won! It only took ";
      message += tries;
      message += " tries!";
      winning = true;
      alert(message);
      var redo = document.querySelector("#playAgain");
      return redo.classList.toggle("offbutton");
      alert(message);

    } else {
      //UPDATE TRIES
      tries++;
      tri.textContent = tries
      //turn that square off
      this.style.backgroundColor = "#232323";
      //instructions
      var instructions = document.querySelector("#instructions");
      instructions.textContent = "Ope, you selected the wrong color!";
    };
});