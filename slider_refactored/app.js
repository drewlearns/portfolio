function Slider(slider){
        if (!(slider instanceof Element)){
                throw new Error('No slider passed in');
        };
        //TODO: CREATE VARIABLE FOR WORKING WITH THE SLIDER


        //SELECT THE ELEMENTS NEEDED FOR SLIDER
        this.slides = slider.querySelector('.slides');
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');
        this.slider = slider;
        //SCOPED FUNCTION 
        Slider.prototype.startSlider = function () {
               this.current = (slider.querySelector('.current') || this.slides.firstElementChild);
                this.prev = (this.current.previousElementSibling || this.slides.lastElementChild);
                this.next = (this.current.nextElementSibling || this.slides.firstElementChild);
                console.log(this.prev, this.current, this.next); 
        };

        //APPLY THE SPECIFIC CLASSES FOR THE SLIDER
        Slider.prototype.applyClasses = function () {
                this.current.classList.add('current');
                this.prev.classList.add('prev');
                this.next.classList.add('next');
        };

        //NAVIGATION
        Slider.prototype.move = function (direction){
                //STRIP CLASSES OFF ALL THE SLIDES

                this.classesToRemove = ['prev', 'current', 'next'];
                this.prev.classList.remove(...this.classesToRemove);
                this.current.classList.remove(...this.classesToRemove);
                this.next.classList.remove(...this.classesToRemove);
                //DETERMIN DIRECTION
                if(direction === 'back'){
                        //MAKE NEW ARRAY OF NEW VALUES AND DESTRUCTURE THEM OVER RESPECTIVELY
                        [this.prev, this.current, this.next] = [(this.prev.previousElementSibling || this.slides.lastElementChild), this.prev, this.current];
                }else {
                        [this.prev, this.current, this.next] = [this.current, this.next, (this.next.nextElementSibling || this.slides.firstElementChild)];
                };
                this.applyClasses();
        };

        //WHEN SLIDER IS CREATED RUN THE START SLIDER FUNCTION & APPLY CLASSES
        this.startSlider();
        this.applyClasses();

        //EVENT LISTENERS       
        prevButton.addEventListener('click', () => this.move('back'));
        nextButton.addEventListener('click', this.move.bind(this));
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));