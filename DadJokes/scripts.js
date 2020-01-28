const buttonText = [
        'Ugh',
        'Omg Dad...',
        'Your jokes are the worst',
        'Seriously?',
        'Stop it, Please',
        'Please Stop',
        'That was the worst one',
        'You\'re embarrassing me!',
        '😂',
        '🙅‍♂️',
        '🤦‍♂️',
];
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

async function fetchJoke () {
        //turn loader on.
        loader.classList.add('hidden');
        jokeButton.classList.add('hidden');
        const response = await fetch('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                },
        });
        loader.classList.remove('hidden');
        jokeButton.classList.remove('hidden')
        return response.json();
};

function randomItemFromArray(arr, not){
        const item = arr[Math.floor(Math.random()*arr.length)];
        if(item === not){
                return randomItemFromArray(arr, not);
        };
        return item;
};

async function handleClick(){
        const { joke } = await fetchJoke(); // DESTRUCTURED BECAUSE WE DON'T WAN THT ID JOKE AND STATUS
        console.log(joke);
        jokeHolder.textContent = joke;
        jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
};
 jokeButton.addEventListener('click', handleClick);

fetchJoke();