function Gallery(gallery) {
        // console.log(Gallery);
        if (!gallery) {
                throw new Error("No Gallery Found!");
        };

        //SELECT ELEMENTS WE NEED
        const images = Array.from(gallery.querySelectorAll('img'));
        // console.log(images);
        const modal = document.querySelector('.modal');
        const prevButton = modal.querySelector('.prev');
        const nextButton = modal.querySelector('.next');
        let currentImage;

        //MAKE A FUNCTION THAT OPENS THE MODAL
        function openModal(){ //DONT FORGET TO INITIATE THIS AT THE BOTTOM OF THE FILE
                // console.info('Opening Modal');
                //First check if the modal is already open because animations
                if (modal.matches('.open')) {
                        console.info('Next Modal is open');
                        return; //stops the function from running
                }
                modal.classList.add('open');
                // console.log(currentImage);
                //EVENT LISTENERS TO BE BOUND WHEN OPENING
                window.addEventListener('keyup', handleKeyUp);
                nextButton.addEventListener('click', showNextImage);
                prevButton.addEventListener('click', showPrevImage);
        };
        //CLOSE MODAL KICKED OFF BY A HANDLER
        function closeModal(){
                // console.info('Closing Modal');
                modal.classList.remove('open');
                //ADD EVENT LISTENERS FOR CLICKS & KEYBOARD
                window.removeEventListener('keyup', handleKeyUp);
                nextButton.removeEventListener('click', showNextImage);
                prevButton.removeEventListener('click', showPrevImage);
        };
        //HANDLE CLICKING TO CLOSE MODAL
        function handleClickOutside(){
                if (event.target === event.currentTarget) {
                        closeModal();
                };
        };
        //HANDLE KEYUP TO CLOSE MODAL, NEXT & PREVIOUS
        function handleKeyUp(){
                if (event.key === 'Escape') return closeModal();
                if (event.key === 'ArrowRight') return showNextImage();
                if (event.key === 'ArrowLeft') return showPrevImage();
        };

        //NEXT BUTTON
        function showNextImage(){
                // console.log(currentImage.nextElementSibling);
                // console.log(gallery.firstElementChild);
                showImage(currentImage.nextElementSibling || gallery.firstElementChild);
        };
        function showPrevImage(){
                // console.log(currentImage.prevElementSibling);
                // console.log(gallery.lasElementChild);
                showImage(currentImage.previousElementSibling || gallery.lastElementChild);
        };
        //SHOW IMAGE
        function showImage(el){
                if (!el) {
                        console.log('No image to show'); 
                        return;
                };
                //update the modal with this information
                // console.log(el);
                modal.querySelector('img').src = el.src; //updates the image source
                // console.log(el.src);
                modal.querySelector('h2').textContent = el.title; //updates the image source
                // console.log(el.title);
                modal.querySelector('figure p').textContent = el.dataset.description; //updates the image source
                // console.log(el.dataset.description);
                currentImage = el;
                openModal();
        };

        // LOOPS
        images.forEach(image => image.addEventListener('click', (event)=> showImage(event.currentTarget)));
        modal.addEventListener('click', handleClickOutside);
        images.forEach(image => image.addEventListener('keyup', (event)=> {
                if (event.key === 'Enter') { 
                        return showImage(event.currentTarget)
                };
        }));

};

//USE IT ON THE PAGE

const gallery1 = Gallery(document.querySelector(".gallery1"));
// const gallery2 = Gallery(document.querySelector(".gallery2"));