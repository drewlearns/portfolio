function Gallery(gallery) {
        console.log(Gallery);
        if (!gallery) {
                throw new Error("No Gallery Found!");
        };
        this.gallery = gallery;
        // SELECT ELEMENTS WE NEED
        this.images = Array.from(gallery.querySelectorAll("img"));
        console.log(this.images);
        this.modal = document.querySelector(".modal");
        this.prevButton = this.modal.querySelector(".prev");
        this.nextButton = this.modal.querySelector(".next");
        //BINDING METHODS 
        console.log("this is the issue with showNextImage: ", this.showNextImage);
        this.showNextImage = this.showNextImage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.showPrevImage = this.showPrevImage.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        // IMAGE EVENT LISTENERS
        this.images.forEach(image =>
                image.addEventListener("click", event => this.showImage(event.currentTarget))
        );
        // KEY EVENT LISTENERS
        this.images.forEach(image => {
                image.addEventListener("keyup", event => {
                        if (event.key === "Enter") {
                                this.showImage(event.currentTarget);
                        };
                });
        });
        this.modal.addEventListener("click", this.handleClickOutside);
};

//USE IT ON THE PAGE

//MAKE A FUNCTION THAT OPENS THE MODAL
Gallery.prototype.openModal = function () {
        //DONT FORGET TO INITIATE THIS AT THE BOTTOM OF THE FILE
        console.info('Opening Modal');
        //First check if the modal is already open because animations
        if (this.modal.matches(".open")) {
                console.info("New Modal is open");
                return; //stops the function from running
        };
        this.modal.classList.add("open");
        console.log("CurrentImage at line 46 ", this.currentImage);
        //EVENT LISTENERS TO BE BOUND WHEN OPENING
        window.addEventListener("keyup", this.handleKeyUp);
        this.nextButton.addEventListener("click", this.showNextImage);
        this.prevButton.addEventListener("click", this.showPrevImage);
};
//CLOSE MODAL KICKED OFF BY A HANDLER
Gallery.prototype.closeModal = function () {
        console.info('Closing Modal');
        this.modal.classList.remove("open");
        //ADD EVENT LISTENERS FOR CLICKS & KEYBOARD
        window.removeEventListener("keyup", this.handleKeyUp);
        this.nextButton.removeEventListener("click", this.showNextImage);
        this.prevButton.removeEventListener("click", this.showPrevImage);
};
//HANDLE CLICKING TO CLOSE MODAL
Gallery.prototype.handleClickOutside = function (event) {
        if (event.target === event.currentTarget) {
                this.closeModal();
        };
};
//HANDLE KEYUP TO CLOSE MODAL, NEXT & PREVIOUS
Gallery.prototype.handleKeyUp = function (event) {
        if (event.key === "Escape") return this.closeModal();
        if (event.key === "ArrowRight") return this.showNextImage();
        if (event.key === "ArrowLeft") return this.showPrevImage();
};

//NEXT BUTTON
Gallery.prototype.showNextImage = function () {
        console.log("current image next sibling ", this.currentImage.nextElementSibling, " showing next image ", this.gallery.firstElementChild);
        this.showImage(
                this.currentImage.nextElementSibling || this.gallery.firstElementChild
        );
};
Gallery.prototype.showPrevImage = function () {
        console.log(this.currentImage.prevElementSibling, " showing previous image ", this.gallery.lasElementChild);
        this.showImage(
                this.currentImage.previousElementSibling || this.gallery.lastElementChild
        );
};
//SHOW IMAGE
Gallery.prototype.showImage = function (el) {
        if (!el) {
                console.log("No image to show");
                return;
        };
        //update the modal with this information
        console.log(el);
        this.modal.querySelector("img").src = el.src; //updates the image source
        console.log(el.src);
        this.modal.querySelector("h2").textContent = el.title; //updates the image source
        console.log(el.title);
        this.modal.querySelector("figure p").textContent = el.dataset.description; //updates the image source
        console.log(el.dataset.description);
        this.currentImage = el;
        this.openModal();
};
const gallery1 = new Gallery(document.querySelector(".gallery1"));
// const gallery2 = new Gallery(document.querySelector(".gallery2"));