const submit = document.getElementById('submit');
const inputs = document.querySelectorAll('.input');
const inputss = document.querySelectorAll('.request');
const inputboxes = document.getElementsByTagName('input');
const allAlerts = document.querySelector('alert');
const successful = document.getElementById('details-submitted-successfully');
const invalid = document.getElementById('details-submitted-invalid');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email'); 
const subject = document.getElementById('subject'); 
const message = document.getElementById('message'); 

// making the alerts popup
function alertPop(){
    successful.classList.toggle('alertpop');
    invalid.classList.toggle('alertpop');
}

// cleathr
// evenlistener on submit button
submit.addEventListener('click',validinputs)

// initialy hide alerts
function hideI(){
    hideI = invalid.style.display ='none'
}
function hideS(){
    hideS = successful.style.display ='none'
}
// show alerts
function showI(){
    showI = invalid.style.display ='flex'
    alertPop()
    // if input is successful after invalid
    // showS()
}
function showS(){
    showS = successful.style.display ='flex'
    alertPop()
}

// function valid inputs
function validinputs(){
    if (fname.value,lname.value,email.value,subject.value,message.value<1){
        showI()
    }
    else{showS()}
}
