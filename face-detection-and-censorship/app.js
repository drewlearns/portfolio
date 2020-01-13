const regeneratorRuntime = require('regenerator-runtime');
const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
// const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
// const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
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

//FACE DETECTION
async function detect() {
        const faces = await faceDetector.detect(video);
        console.dir(faces.length);
        //REQUEST WHEN THE NEXT ANIMATION FRAME IS AND THEN RUN DETECT()
        requestAnimationFrame(detect); //this is recursion function - it will run until it is stopped explicitly
};


populateVideo().then(detect);