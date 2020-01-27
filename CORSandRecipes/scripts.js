const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query){
        const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await res.json();
        console.log(data);
        return data;
};
async function handleSubmit(event){
        event.preventDefault();
        console.log(event.currentTarget.query.value);
        const btn = event.currentTarget;
        btn.submit.disabled = true;
        //submit the search
        const recipes = await fetchRecipes(form.query.value);
        console.log(recipes);
        btn.submit.disabled = false;
        displayRecipes(recipes.results);
};
function displayRecipes(recipes){
        console.log('creating HTML');
        console.log(recipes);
        const html = recipes.map(
                recipe => `<div class="recipe">
                        <h2>${recipe.title}</h2>
                        <p>${recipe.ingredients}</p>
                        ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt ="${recipe.title}">`}
                </div>`
        );
        recipesGrid.innerHTML = html.join('');
};
form.addEventListener('submit', handleSubmit);
fetchRecipes('pizza');