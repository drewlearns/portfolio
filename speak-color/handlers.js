function logWords(results){
        console.log(results[results.length -1][0].transcript);
};
import {isValidColor} from './colors.js'
export function handleResult({results}){
        logWords(results);
        const words = results[results.length -1][0].transcript;
        // LOWERCASE ALL THE THINGS
        let color = words.toLowerCase();
        //REMOVE SPACES
        color = color.replace(/\s/g, '');
        //CHECK IF IT'S A VALID COLOR
        if(!isValidColor(color)) return;
        //IF IT'S A VALID COLOR, SHOW THE UI FOR IT
        const colorSpan = document.querySelector(`.${color}`);
        colorSpan.classList.add('got');
        console.info('That was a valid color');
        console.info(color)
        // CHANGE BACKGOUND COLOR
        document.body.style.backgroundColor = color;
};

