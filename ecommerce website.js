// Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.3)";

  }

  else{

    navbar.style.boxShadow = "none";

  }

});




// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

}




// Cart Counter

const cartButtons =
document.querySelectorAll(".add-cart");

const cartCount =
document.getElementById("cart-count");

let count = 0;

cartButtons.forEach((button) => {

  button.addEventListener("click", () => {

    count++;

    cartCount.innerText = count;

    button.innerText = "Added ✓";

  });

});


