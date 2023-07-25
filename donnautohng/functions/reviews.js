// add review
var holder = document.querySelector('.reviews')
var addedReview = document.getElementById('addedreview');
var btnAddReview = document.getElementById('btnaddreview');

btnAddReview.addEventListener('click',function(){
    if(addedReview.value ===''){
        alert('No input detected')
        if(addedReview.value < 5){
            alert('invalid input')
        }
    
    }
    else{
        let container = document.createElement('div')
        holder.append(container)
        container.classList.add('reviewbox')

        let profile = document.createElement('div')
        container.append(profile)
        profile.classList.add('rev-img')

        let textplus = document.createElement('p')
        let inputtext = addedReview.value
        let text = textplus.innerHTML =inputtext
        textplus.classList.add('rev-text')
        container.append(textplus)
    }
        // addedReview.value ===""
})


