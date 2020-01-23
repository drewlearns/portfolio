function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
};

async function destroyPopup(popup) {
        popup.classList.remove('open');
        await wait(1000);
        //REMOVE THE POPUP ENTIRELY
        popup.remove();
        popup = null;
};

function ask(options) {
        return new Promise(async function (resolve) {
                //FIRST CREATE A POPUP WITH ALL THE FIELDS IN IT
                const popup = document.createElement('form');
                popup.classList.add('popup');
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `
                        <fieldset>
                            <label>${options.title}</label>
                            <input type="text" name="input" required>
                            <button type="submit">Submit</button>
                        </fieldset>
                        `
                );
                //CHECK IF THEY WANT TO CANCEL
                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = 'button'; // important because if we don't tell it a type it will assume it's a submit.
                        skipButton.textContent = 'Cancel';
                        popup.firstElementChild.appendChild(skipButton); // this needs to be firstElementChild because the space on line 11 otherwise you could use firstChild
                        //TODO: LISTEN FOR A CLICK ON THAT CANCEL BUTTON
                        skipButton.addEventListener(
                                'click', 
                                function () {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                { once: true }
                        );
                };
                //LISTEN FOR THE SUBMIT EVENT ON THE INPUTS
                popup.addEventListener(
                        'submit', 
                        function (event) {
                                event.preventDefault();
                                console.log(event.target); // gives us the form
                                console.log(event.target.input); // gives us the input box 
                                console.log(event.target.input.value); // gives us the input value
                                console.log('Submitted');
                                resolve(event.target.input.value);
                                destroyPopup(popup);
                        },
                        { once: true });
                //WHEN SOMEONE DOES SUBMIT, RESOLVE THE DATA THAT WAS IN THE INPUT BOX
                //INSERT THAT POPUP INTO THE DOM
                document.body.appendChild(popup);
                // PUT A SMALL TIMEOUT BEFORE WE ADD THE OPEN CLASS
                await wait(50);
                popup.classList.add('open');
        });
};
// Select All Buttons That Have A Question
async function askQuestion(event) {
        const button = event.currentTarget;
        const cancel = 'cancel;' in button.hasAttribute('data-cancel');
        const answer = await ask({ title: button.dataset.question, cancel, });
        console.log(answer);
};
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
    {title: `What is your name?`},
    {title: `What is your age?`, cancel: true},
    {title: `What is your pet's name?`},  
];  

async function asyncMap(array, callback) {
    const results = [];
    for(const item of array) {
        results.push(await callback(item));
    };
    return results;
};

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
};
go();
// async function askMany() {
//         for (const question of questions) {
//                 const answer = await ask(question);
//                 console.log(answer);
//         };
// };
// askMany();