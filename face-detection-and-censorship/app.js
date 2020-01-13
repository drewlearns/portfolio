const regeneratorRuntime = require('regenerator-runtime');
const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const faceCanvas = document.querySelector('.face');
const ctx = canvas.getContext('2d');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector({fastMode:true});
const SIZE = 10;
const SCALE = 2;
// POPULATE THE VIDEO AND PLAY IT
async function populateVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
        });
        video.srcObject = stream; //VIDEO SOURCE
        await video.play(); // PLAY IT
        // RESIZE CANVAS SIZE TO MATCH VIDEO SIZE
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        faceCanvas.width = video.videoWidth;
        faceCanvas.height = video.videoHeight;
};

// FACE DETECTION
async function detect() {
        const faces = await faceDetector.detect(video);
        // console.dir(faces.length);
        //REQUEST WHEN THE NEXT ANIMATION FRAME IS AND THEN RUN DETECT
        faces.forEach(drawFace);
        faces.forEach(censor);
        requestAnimationFrame(detect); //this is recursion function (calls itself)- it will run until it is stopped explicitly
};
// DRAW A BOX AROUND THE FACE
function drawFace(face){
        const {width, height, top, left } = face.boundingBox;
        // console.log({witdth: width, height: height, top: top,left: left });
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.strokeStyle = '#ffc600';
        ctx.lineWidth = 5;
        ctx.strokeRect(left, top, width, height);
};
//BLUR THE FACE
function censor ({boundingBox: face}) {
        faceCtx.clearRect(0,0, faceCanvas.width, faceCanvas.height);
        faceCtx.imageSmoothingEnabled = false;
        faceCtx.drawImage(
                video, 
                face.x, 
                face.y, 
                face.width,
                face.height,
                face.x,
                face.y,
                SIZE,
                SIZE,
        );
        const width = face.width * SCALE;
        const height = face.height * SCALE;
        faceCtx.drawImage(
                faceCanvas, //source
                face.x,
                face.y,
                SIZE,
                SIZE,
                face.x - (width - face.width)/2,
                face.y - (height - face.height)/2,
                width, //blows it back up
                height, 
        )
};


populateVideo().then(detect);