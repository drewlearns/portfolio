// SELECT THE ELEMENTS ON THE PAGE -Canvas, SHAKE
const canvas = document.querySelector('#etch-a-sketch');
console.log(canvas);
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(`.shake`);
// SETUP OUR CANVAS FOR DRAWING
const width = canvas.width;
const height = canvas.height;
console.log(width, height);
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