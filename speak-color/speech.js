//IMPORTS
import {handleResult} from './handlers.js';
import {isDark, colorsByLength} from './colors.js';
// import {isValidColor} from './colors.js';

const colorsEl = document.querySelector('.colors');
window.SpeechRecognition = 
        window.SpeechRecognition || 
        window.webkitSpeechRecognition

function displayColors(colors){
        return colors.map(color =>  
                `<span class="color ${color} ${
                        isDark(color) ? 'dark' : ''
                }" style="background: ${color};">${color}
                </span>
                `).join('');
};

export function start () {
        //CHECK TO SEE IF THE USER'S BROWSER SUPPORTS SPEECH RECOGNITION
        if (!('SpeechRecognition' in window)) {
                console.log(`
                        Sorry your browser doesn't support speech Recognition.
                        I recommend chrome web browser with experimental tools enabled. -Drew
        `);
        return;
        };
        //SPEECH RECOGNITION IS SUPPORTED
        console.info('Starting Speech Recognition');
        //MAKE NEW SPEECH RECOGNITION
        const recognition = new SpeechRecognition();
        recognition.continous = true; // doesn't stop after it thinks you are done
        recognition.interimResults = true; // Types as you speak
        // console.log(recognition);
        recognition.onresult = handleResult;
        recognition.start();
};

start();
colorsEl.innerHTML = displayColors(colorsByLength);