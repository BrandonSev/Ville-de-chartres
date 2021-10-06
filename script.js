const burger = document.querySelector(".burger__menu");
const mobileNav = document.querySelector(".header__menu_mobile");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  mobileNav.classList.toggle("is-open");
});

const contactButton = document.querySelector("#contact");
const contactModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");
const submitForm = document.querySelector(".formulaire");

// contactButton.addEventListener("click", () =>{
//   contactModal.style.display="block";
// });

//Script Démarches et Services//
const adminIcon = document.querySelector(".grid__icon", ".grid__icon1");
const adminText = document.querySelector("#admin");
const transportIcon = document.querySelector(".grid__icon grid__icon2");
const transportText = document.querySelector("#transport");
const healthIcon = document.querySelector(".grid__icon grid__icon3");
const healthText = document.querySelector("#health");
const teachIcon = document.querySelector(".grid__icon grid__icon4");
const teachText = document.querySelector("#teach");
const socialIcon = document.querySelector(".grid__icon grid__icon5");
const socialText = document.querySelector("#social");
const publicMarketIcon = document.querySelector(".grid__icon grid__icon6");
const publicMarketText = document.querySelector("#publicMarket");

const menuSelector = document.querySelector("#formalitySelect");

menuSelector.addEventListener("select", () => {

  
})

adminIcon.addEventListener("click", () =>{
  adminText.style.display="block";
//pour ouvrir le modal en cliquant sur le boutton contact
if (contactButton) {
  contactButton.addEventListener("click", () => {
    contactModal.style.display = "flex";
  });
}
// pour ouvrir et fermer le modal via la croix
if (closeModal) {
  closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
  });
}

if (submitForm) {
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé !");
  });
}
if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.id == "myModal" ? (contactModal.style.display = "none") : null;
  });
}
