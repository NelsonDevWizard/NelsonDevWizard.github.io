let sliderImages = document.querySelectorAll('.image');
let arrowLeft = document.getElementById('prev');
let arrowRight = document.getElementById('next');
let position = 0; 
    
    // console.log(sliderImages);
    // console.log(arrowLeft);
    // console.log(arrowRight);
    // console.log(position);

function reset(){
    sliderImages.forEach((image) => {
        image.style.display = 'none';
    })
}
function start(){
    reset();
    sliderImages[0].style.display = 'block'
}
// LEFT MOVE
arrowLeft.addEventListener('click', () => {
    reset();
    if (position === 0){
        position = sliderImages.length;
    }
    position--;
    sliderImages[position].style.display = 'block'
});
// AUTOMATIC MOVING LEFT
function autoLeft() {
    reset();
    if(position === 0){
        position = sliderImages.length;
    }
    position--;
    console.log(position);
    sliderImages[position].style.display = 'block' ;

    setTimeout(autoLeft, 250000 )
};

window.onload = autoLeft;


// RIGHT MOVE
    arrowRight.addEventListener('click', () => {
        reset();
        if(position === sliderImages.length-1){
            position = -1;
        }
        position++;
        console.log(position);
        sliderImages[position].style.display = 'block' ;
    });
 // AUTOMATIC MOVING RIGHT
//  function autoRight(){
//     reset();
//     if(position === sliderImages.length-1){
//         position = -1;
//     }
//     position++;
//     console.log(position)
//     sliderImages[position].style.display = 'block';

//     setTimeout(autoRight, 2000)
    
//  }
// window.onload = autoRight;




