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

//pour ouvrir le modal en cliquant sur le boutton contact

contactButton?.addEventListener("click", () => {
  contactModal.style.display = "flex";
});
// pour ouvrir et fermer le modal via la croix
closeModal?.addEventListener("click", () => {
  contactModal.style.display = "none";
});

submitForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Votre message a bien été envoyé !");
});
contactModal?.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.id == "myModal" ? (contactModal.style.display = "none") : null;
});
