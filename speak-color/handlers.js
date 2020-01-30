function logWords(results){
//         // return results[results.length -1][0].transcript;
};
import {isValidColor} from './colors.js'
import {start} from './speech.js'

export function handleResult({results}){
        logWords(logWords(results));
        const words = results[results.length -1][0].transcript;
        console.log(words);
        // LOWERCASE ALL THE THINGS
        let color = words.toLowerCase();
        //REMOVE SPACES
        color = color.replace(/\s/g, '');
        //CHECK IF IT'S A VALID COLOR
        console.log(isValidColor(color));
        if(!isValidColor(color)) {
                return start();
        }
        //IF IT'S A VALID COLOR, SHOW THE UI FOR IT
        const colorSpan = document.querySelector(`.${color}`);
        colorSpan.classList.add('got');
        console.info('That was a valid color');
        // console.info(results[results.length -1][0].transcript);
        console.info(color)
        // CHANGE BACKGOUND COLOR
        document.body.style.backgroundColor = color;
        start();
};

