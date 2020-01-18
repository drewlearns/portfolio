function Slider(slider){
        if (!(slider instanceof Element)){
                throw new Error('No slider passed in');
        };
        //TODO: CREATE VARIABLE FOR WORKING WITH THE SLIDER
        //EMPTY VARIABLES
        let current;
        let prev;
        let next;

        //SELECT THE ELEMENTS NEEDED FOR SLIDER
        const slides = slider.querySelector('.slides');
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');

        //SCOPED FUNCTION 
        function startSlider(){
                current = (slider.querySelector('.current') || slides.firstElementChild);
                prev = (current.previousElementSibling || slides.lastElementChild);
                next = (current.nextElementSibling || slides.firstElementChild);
                console.log(prev, current, next); 
        };

        //APPLY THE SPECIFIC CLASSES FOR THE SLIDER
        function applyClasses() {
                current.classList.add('current');
                prev.classList.add('prev');
                next.classList.add('next');
        };

        //NAVIGATION
        function move(direction){
                //STRIP CLASSES OFF ALL THE SLIDES
                const classesToRemove = ['prev', 'current', 'next'];
                prev.classList.remove(...classesToRemove);
                current.classList.remove(...classesToRemove);
                next.classList.remove(...classesToRemove);
                //DETERMIN DIRECTION
                if(direction === 'back'){
                        //MAKE NEW ARRAY OF NEW VALUES AND DESTRUCTURE THEM OVER RESPECTIVELY
                        [prev, current, next] = [(prev.previousElementSibling || slides.lastElementChild), prev, current];
                }else {
                        [prev, current, next] = [current, next, (next.nextElementSibling || slides.firstElementChild)];
                };
                applyClasses();
        };

        //WHEN SLIDER IS CREATED RUN THE START SLIDER FUNCTION & APPLY CLASSES
        startSlider();
        applyClasses();

        //EVENT LISTENERS       
        prevButton.addEventListener('click', () => move('back'));
        nextButton.addEventListener('click', move);
};

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));