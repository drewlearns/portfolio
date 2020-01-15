//SELECTORS AND CONSTANTS INCLUDING AN ARRAY TO HOLD OUR STATE
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
let items = [];
//HANDLE SUBMIT EVENT
function handleSubmit(event){
        event.preventDefault();
        console.log('submitted!');
        const name = event.currentTarget.item.value;
        console.log(name);
        if (!name) return;
        let item = {
                name, 
                id: Date.now(),
                complete: false,
        };
        //PUSH ITEMS INTO OUR STATE
        items.push(item);
        console.log(`There are now ${items.length} in your state.`);
        event.currentTarget.reset(); //clears the form
        // displayItems();
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
};
//DISPLAY ITEMS
function displayItems() {
        // console.log(items);
        const html = items.map(item=> `<li class="shopping-list-item">
                <input type="checkbox" value="${item.id}" ${item.complete ? 'checked' : ''}>
                <span class="itemName">${item.name}</span>
                <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
                </li><hr>`).join('');
        // console.log(html);
        list.innerHTML = html;
};
function mirrorToLocalStorage(){
        console.info('Saving items to localStorage');
        localStorage.setItem('items', JSON.stringify(items));
};
function restoreFromLocalStorage(){
        console.info('Restored from localStorage');
        const lsItems = JSON.parse(localStorage.getItem('items'));
        if(lsItems.length) { //truthy to check if there is anything in the array
                lsItems.forEach(item => items.push(item));
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        };
};




function deleteItem(id) {
        items = items.filter(item => item.id !== id);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
};
//KEEP TRACK OF THE ITEMS TO SEE IF THEY ARE COMPLETE
function markAsComplete(id){
        console.log('Marking as complete', id);
        const itemReflected = items.find(item => item.id === id);
        console.log(itemReflected);
        itemReflected.complete = !itemReflected.complete;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
//RENDER OUT A LIST OF ALL ITEMS CREATED
//LISTEN FOR WHEN A USER SUBMITS
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', (event) => {
        const id = parseInt(event.target.value);
        if (event.target.matches('button')) {
                deleteItem(id);
        };
        if (event.target.matches('input[type="checkbox"]')) {
                markAsComplete(id);
        };

});
restoreFromLocalStorage()