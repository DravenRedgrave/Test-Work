$(document).ready(function(){
  $('.testimonial-slider').slick({
    slidesToShow:2,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    WariableWidth:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateFrom(){

  clearMessages();

  let errorFlag = false

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if(!telephoneIsValid(telephone.value)){
    errorNodes[1].innerText = "Invalid telephone address";
    telephone.classList.add("error-border");
    errorFlag = true;
  }
  if(message.value.length < 1){
    errorNodes[2].innerText = "Please Enter Message";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if(!errorFlag){
    success.innerText = "Success!";
  }
}

function clearMessages() {
  for(let i=0; i< errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.add("error-border");
  telephone.classList.add("error-border");
  message.classList.add("error-border");
}


function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

function telephoneIsValid(telephone){
  let pattern = /^\d[\d\(\)\ -]{4,14}\d$/;
  return pattern.test(telephone);
}


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const startingMinutes = 30;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;


  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
