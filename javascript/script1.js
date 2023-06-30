const wraper = document.querySelector(".wraper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.lgnbtn-popup');

const iconClose = document.querySelector('.icon-close');

registerLink.onclick =() =>{
    wraper.classList.add('active');
}

loginLink.onclick =() =>{
    // console.log("hlw");
    wraper.classList.remove('active');    
}
btnPopup.onclick =() =>{
    wraper.classList.add('active-popup');
}


iconClose.onclick =() =>{
    wraper.classList.remove('active');
}

