function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve, ms));
};
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
};
// //ASYNC AWAIT FOR OF LOOP
// async function draw(element) {
//   const text = element.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   };
// };

//RECURSION
function draw(element){
    let index = 1;
    const text = element.textContent;
    const{ typeMin, typeMax } = element.dataset;
    async function drawLetter(){
         element.textContent = text.slice(0, index);
         index ++;
         const {typeMin, typeMax} = element.dataset;
         const ammountOfTimeToWait = getRandomBetween(typeMin, typeMax);
         await wait(ammountOfTimeToWait);
         if (index <= text.length) {
             drawLetter();
         };
    };
    // when runs, kick off drawLetter
    drawLetter();
};
//Selector
document.querySelectorAll('[data-type]').forEach(draw);