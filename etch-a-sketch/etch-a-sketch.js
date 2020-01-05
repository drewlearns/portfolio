// SELECT THE ELEMENTS ON THE PAGE -Canvas, SHAKE
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(`.shake`);
// SETUP OUR CANVAS FOR DRAWING
// -- MAKE A VARIABLE CALLED HEIGHT AND WIDTH FROM THE SAME PROPERTIES ON OUR CANVAS
const { width, height} = canvas;
// -- CREATE RANDOM X AND Y COORDINATES
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* width);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath(); //STARTS THE DRAWING (PUTS PEN ON PAPER)
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); 

// WRITE  DRAW Function
function draw({key}) {
        console.log(key);
        //START THE PATH
        ctx.beginPath();
        ctx.moveTo(x, y);
        //MOVE OUR X & Y VALUES DEPENDING ON WHAT THE USER PRESSED
        x -= 10;
        y -= 10;
        ctx.linto(x,y);
        ctx.stroke();
};
// WRITE A HANDLER FOR THE ARROW KEYS
function handlekey (event) {
        if(event.key.includes('Arrow')) {
                event.preventDefault();
                draw({key: event.key});
        };
}
// CLEAR "SHAKE" Function

// LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handlekey);