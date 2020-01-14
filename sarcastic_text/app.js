const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'H', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'k', k: 'K', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'M', n: 'n', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 't', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: 'W', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
const filters = {
        sarcastic(letter, index) {
                // index % 2 on an odd number results in 1 (truthy)
                if (index % 2) { //if index is even == false
                        return letter.toUpperCase()
                };
                return letter.toLowerCase();
        },
        funky(letter) {
                // check if there is a funky letter for this case
                let funkyLetter = funkyLetters[letter];
                if (funkyLetter) return funkyLetter;
                // if not check for a lowercase version
                funkyLetter = funkyLetters[letter.toLowerCase()];
                if (funkyLetter) return funkyLetter;
                // else return regular character
                return letter;
        },
unable(letter) {
        const random = Math.floor(Math.random() *3);
        if(letter === ' ' && random === 2){
                return '...';
        }
        return letter;
},
};

//TRANSFORM TEXT FUNCTION
function transformText(text) {
        const filter = document.querySelector('[name="filter"]:checked').value;
        // USE TEXT AND LOOP OVER EACH LETTER
        const mod = Array.from(text).map(filters[filter]);
        result.textContent = mod.join('');
};


//PASS THE EVENT TO THE TRANSFORMTEXT() FUNCTION
textArea.addEventListener('input', event => transformText(event.target.value));

filterInputs.forEach(input =>
  input.addEventListener('input', () => {
    transformText(textArea.value);
  })
);