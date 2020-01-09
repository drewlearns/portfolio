const buttonRight = document.querySelector('.buttonRight')
const buttonLeft = document.querySelector('.buttonLeft')
const buttonUp = document.querySelector('.buttonUp')
const buttonDown = document.querySelector('.buttonDown')
const gas = document.querySelector('.gas')
const restart = document.querySelector('.restart')
const cybertruck = document.querySelector('.cybertruck');
let x = 0;
let y = 0;
let speed = 50;
let flipped = true;

//KEY HANDLER
function handleKeyDown(event) {
        if (!event.key.includes('Arrow')) {
                alert(`That is not a valid key`);
                return;}
        switch (event.key){
        case 'ArrowUp':
                y = y - 1;
                rotate = 90;
                flipped = true;
                break;
        case 'ArrowDown':
                y = y + 1;
                rotate = -90;
                flipped = true;
                break;
        case 'ArrowRight':
                x = x + 1;
                rotate = 0;
                flippedX = true;
                break;
        case 'ArrowLeft':
                x = x - 1;
                rotate = 0;
                flipped = false;
                break;
        default: 
                break;
        }
        cybertruck.setAttribute('style', `
                --rotateX: ${flipped ? '180deg' : '0'};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
        `);
};

// BUTTONS
restart.addEventListener("click", function () {
        alert('Recharging Your Cyber Truck!')
        document.location.reload(true);
})
gas.addEventListener("click", () => speed += 50 );
buttonRight.addEventListener('click', function () {
        x = x + 1;
        rotate = 0;
        flippedX = true;
        cybertruck.setAttribute('style', `
                --rotateX: ${flipped ? '180deg' : '0'};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
        `);
});
buttonLeft.addEventListener('click',function(){
                x = x - 1;
        rotate = 0;
        flipped = false;
        cybertruck.setAttribute('style', `
                --rotateX: ${flipped ? '180deg' : '0'};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
        `);
});
buttonUp.addEventListener('click', function(){
        y = y - 1;
        rotate = 90;
        flipped = true;
        cybertruck.setAttribute('style', `
                --rotateX: ${flipped ? '180deg' : '0'};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
        `);

});
buttonDown.addEventListener('click', function(){
        y = y + 1;
        rotate = -90;
        flipped = true;
        cybertruck.setAttribute('style', `
                --rotateX: ${flipped ? '180deg' : '0'};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
        `);

});
window.addEventListener('keydown', handleKeyDown);
