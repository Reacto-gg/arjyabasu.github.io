 // **** Type Writer Effect ****
 const text_effect = document.getElementById('text_animation');

const typewriter = new Typewriter(text_effect, {
  // loop: true,
  delay: 75,
});


typewriter.typeString('Hello, Wonderful People')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Welcome To My Site')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Myself <br> Arjya Basu')
    .pauseFor(2500)
    .start();


  // **** Experienrce Section ****
  // Certificate Of Quzzo
 const experience_btn_1 = document.querySelector(".experience_button1");
 const experience_modal = document.querySelector(".experience_certificates_modal");
 const experience_original_img = document.querySelector(".experience_certificates_full_img");

 experience_btn_1.addEventListener("click", () => {
   experience_modal.classList.add("open_2");
   experience_original_img.classList.add("open_2");

   //nav bar hidden, adding a class
   nav.classList.add("hide_that_div");
   //Hide Scroll bar
   document.body.style.overflow = 'hidden';
 });

 experience_modal.addEventListener("click", (e) => {
   if(e.target.classList.contains("experience_certificates_modal")){
   experience_modal.classList.remove("open_2");
   experience_original_img.classList.remove("open_2");
   //nav bar show, removing a class
   nav.classList.remove("hide_that_div");
   //Show Scroll bar
   document.body.style.overflow = 'visible';
   }
 });

 // Certificate Of Exposys
 const experience_btn_2 = document.querySelector(".experience_button2");
 const experience_modal_2 = document.querySelector(".experience_certificates_modal_2");
 const experience_original_img_2 = document.querySelector(".experience_certificates_full_img_2");

 experience_btn_2.addEventListener("click", () => {
   experience_modal_2.classList.add("open_3");
   experience_original_img_2.classList.add("open_3");
   //nav bar hidden, adding a class
   nav.classList.add("hide_that_div");
   //Hide Scroll bar
   document.body.style.overflow = 'hidden';
 });

 experience_modal_2.addEventListener("click", (e) => {
   if(e.target.classList.contains("experience_certificates_modal_2")){
   experience_modal_2.classList.remove("open_3");
   experience_original_img_2.classList.remove("open_3");

   //nav bar show, removing a class
   nav.classList.remove("hide_that_div");
   //Show Scroll bar
   document.body.style.overflow = 'visible';
   }
 });


  // **** Certificates Section ****
const modal = document.querySelector(".certificates_modal");
const previews = document.querySelectorAll(".certificates_gallery img");
const original = document.querySelector(".certificates_full_img");
//nav bar
const nav = document.getElementById("header");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //Dynamically Change Images
    const originalSrc = preview.getAttribute("data-original");
    original.src = originalSrc;

    //nav bar hidden, adding a class
    nav.classList.add("hide_that_div");
    //Hide Scroll bar
    document.body.style.overflow = 'hidden';
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("certificates_modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");

    //nav bar show, removing a class
    nav.classList.remove("hide_that_div");
    //Show Scroll bar
    document.body.style.overflow = 'visible';
  }
});

// Hamburger Menu Btn Toggle
const hamburger_btn = document.querySelector(".hamburger");
const hamburger_menu = document.querySelector(".mobile_nav");
const anchor_tag_clicked = document.querySelectorAll(".mobile_nav_click");
const body_overflow = document.querySelector("body");

hamburger_btn.addEventListener('click', function () {
  hamburger_btn.classList.toggle("is_active");
  hamburger_menu.classList.toggle("is_active");
  body_overflow.classList.toggle("overflow_hidden");
});

//Anchor link click to auto click on hamberger menu function
function autoHamburgerOnClick() {
  document.getElementById("hamburger").click();
}
