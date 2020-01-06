const cardButtons = document.querySelectorAll('.cardbutton');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick (event) {
        console.log('you clicked learn more');
        const button = event.currentTarget;
        const card = button.closest('.card');
        // console.log(card);
        //GRAB IMAGE SOURCE
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        console.log(desc);
        //POPULATE THE MODAL WITH THE NEW INFORMATION
        modalInner.innerHTML = `<img width="600" height="600" src="${imgSrc.replace('200', '600')} alt="${name}"/><p>${desc}</p>`
          // show the modal
        modalOuter.classList.add('open');
};

cardButtons.forEach(button => button.addEventListener ('click',  handleCardButtonClick)
);

// CLOSE MODAL
function closeModal() {
        modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(event){
        console.log(event.target);
        console.log(event.currentTarget);
        const isOutside = !event.target.closest('.modal-inner');
        if (isOutside){
        closeModal();
}
})

window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape'){
                closeModal();
        }
});