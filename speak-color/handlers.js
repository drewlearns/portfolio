function logWords(results){
        console.log(results[results.length -1][0].transcript);
};

export function handleResult(event){
        logWords(event.results);
}