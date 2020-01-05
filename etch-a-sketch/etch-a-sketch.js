// SELECT THE ELEMENTS ON THE PAGE -Canvas, SHAKE
const canvas = document.querySelector('#etch-a-sketch');
console.log(canvas);
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(`.shake`);
// SETUP OUR CANVAS FOR DRAWING
// -- MAKE A VARIABLE CALLED HEIGHT AND WIDTH FROM THE SAME PROPERTIES ON OUR CANVAS
const { width, height} = canvas;
console.log(width, height);
// -- CREATE RANDOM X AND Y COORDINATES


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath(); //STARTS THE DRAWING (PUTS PEN ON PAPER)
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke(); 

// WRITE  DRAW Function

// WRITE A HANDLER FOR THE MSMediaKeySession

// CLEAR "SHAKE" Function

// LISTEN FOR ARROW KEYS