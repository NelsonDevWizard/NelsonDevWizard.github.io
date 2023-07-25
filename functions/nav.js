// fixed nav
// window.addEventListener('scroll', function(){
//     var nav = document.querySelector('.nav');
//     nav.style.position = "fixed"
//     // nav.style.backgroundColor = "red"
//     })

// SCROLL NAVBAR FIXED
window.addEventListener('scroll', function(){
    var nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})