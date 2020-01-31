import {hslToRgb} from './utils.js';
const regeneratorRuntime = require('regenerator-runtime');
const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
const freq = (2 ** 6)
const line = 10;
let bufferLength;
function handleError(err){
        alert(`You must provide microphone access to use this app`)
};
async function getAudio(){
        const stream = await navigator.mediaDevices
                .getUserMedia({audio: true})
                .catch(handleError);
        const audioCtx = new AudioContext();
        analyzer = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyzer);
        // HOW FREQUENTLY DO YOU WANT TO COLLECT DATA
        analyzer.fftSize = freq; //factor of 2 so they stay a byte
        //PULL DATA FROM THE AUDIO
        bufferLength = analyzer.frequencyBinCount; //how many peices of data are there
        const timeData = new Uint8Array(bufferLength); 
        // console.log(timeData);
        const frequencyData = new Uint8Array(bufferLength);
        // console.log(frequencyData);
        drawTimedata(timeData);
        drawFreqency(frequencyData);
};

function drawTimedata(timeData){
        // console.log(timeData);
        //INJECT TIME DATA INTO TIMEDATA ARRAY
        analyzer.getByteTimeDomainData(timeData);
        //TURN DATA INTO SOMETHING VISUAL
        // 1. CLEAR THE CANVAS (TODO)
        ctx.clearRect(0,0, WIDTH, HEIGHT);
        //2. SETUP CANVAS DRAWING
        ctx.lineWidth = line;
        ctx.strokeStyle = '#1d8def';
        ctx.beginPath();
        const sliceWidth = WIDTH / bufferLength; // how big each slice shold be
        let x = 0;
        timeData.forEach((data, i)=> {  // i for index
                // console.log(data);
                const v = data / 128; // multiplier
                const y = (v * HEIGHT) / 2;
                //DRAW LINES
                if(i ===0){
                        ctx.moveTo(x, y);
                }else{
                        ctx.lineTo(x, y);
                };
                x += sliceWidth;
        });
        ctx.stroke();
        //CALL ITSELF ASSOON AS POSSIBLE
        requestAnimationFrame(()=> drawTimedata(timeData));
};

function drawFreqency(frequencyData){
        //GET FREGUENCYDATA INTO FREQUENCY DATA ARRAY
        analyzer.getByteFrequencyData(frequencyData);
        // consoe.log(frequencyData);
        //CALCULATE THE BAR WIDTH
        const barWidth = (WIDTH / bufferLength) * 2.5;
        // console.log(barWidth);
        let x = 0;
        frequencyData.forEach( amount => {
                //0-255
                const percent = amount / 255;
                const[h,s,l] = [((360/(percent*360)) - 0.5), 0.8, 0.5]
                const barHeight = HEIGHT * percent;
                //CONVERT THE COLOR TO HSL (TODO)
                const [r, g, b] = hslToRgb(h, s, l);
                ctx.fillStyle = `rgba(${r},${g},${b}, 0.8)`;
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 2;
        });
        requestAnimationFrame( () => drawFreqency(frequencyData));
};
getAudio();