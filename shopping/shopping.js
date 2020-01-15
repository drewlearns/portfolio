//SELECTORS AND CONSTANTS INCLUDING AN ARRAY TO HOLD OUR STATE
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
let items = [];
//HANDLE SUBMIT EVENT
function handleSubmit(event){
        event.preventDefault();
        console.log('submitted!');
        const name = event.currentTarget.item.value;
        if (!name) return; //IF EMPTY INPUT DO NOTHING
        console.log(name);
        const item = {
                name, 
                id: Date.now(),
                complete: false,
        };
        //PUSH ITEMS INTO OUR STATE
        items.push(item);
        console.log(`There are now ${items.length} in your state.`);
        event.target.reset();
        // displayItems();
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
};
//DISPLAY ITEMS
function displayItems() {
        console.log(items);
        const html = items.map(item=> `<li class="shopping-list-item">
                <input type="checkbox">
                <span class="itemName">${item.name}</span>
                <button aria-label="Remove ${item.name}" value="${item.name}">&times;</button>
                </li><hr>`).join('');
        // console.log(html);
        list.innerHTML = html;
};
function mirrorToLocalStorage(){
        console.info('Saving items to localStorage');
        localStorage.setItem('items', JSON.stringify(items);
};
function restoreFromLocalStorage(){
        console.info('Restored from localStorage');
        const localStorageItem = JSON.parse(localStorage.getItem('items'));
        if(localStorageItem.length) { //truthy to check if there is anything in the array
                items = localStorageItem;
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
                localStorageItem = items;
        };
};
//KEEP TRACK OF THE ITEMS TO SEE IF THEY ARE COMPLETE
//RENDER OUT A LIST OF ALL ITEMS CREATED
//LISTEN FOR WHEN A USER SUBMITS
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
// list.addEventListener('itemsUpdated', event => {
//         console.log(event);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
