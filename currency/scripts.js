const form = document.querySelector('.app form');
const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('body > div.app > form > p.to_amount'); 
const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};
const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options){
        return Object.entries(options)
                .map(
                ([currencyCode, currencyName]) =>
                        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
                )
                .join('');
};

async function fetchRates(base = 'USD'){
        const response = await fetch(endpoint)
        const rates = await response.json();
        return rates;
};

async function convert(amount, from, to){
        //CHECK TO SEE IF WE HAVE THE RATES TO CONVERT FROM FIRST
        if (!ratesByBase[from]){
                console.log('Oh no, we don\'t have the ${from} to convert to ${to}. So let\'s go get it!');
                const rates = await fetchRates(from);
                //STORE FOR NEXT TIME
                ratesByBase[from] = rates;
        };
        //CONVERT THAT AMOUNT THAT WAS PASSED
        const rate = ratesByBase[from].rates[to];
        const convertedAmount = rate * amount;
        console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
        return convertedAmount;
};
function formatCurrency(amount, currency){
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
};

async function handleInput(event){
        const rawAmount = await convert(
                fromInput.value, 
                fromSelect.value, 
                toSelect.value);
        console.log(rawAmount);
        toEl.textContent = formatCurrency(rawAmount, toSelect.value);
};

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);