const burger = document.querySelector(".burger__menu");
const mobileNav = document.querySelector(".header__menu_mobile");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  mobileNav.classList.toggle("is-open");
});

const contactButton = document.querySelector("#contact");
const contactModal = document.querySelector("#myModal");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    contactModal.style.display = "block";
  });
}

const btnChronologie = document.querySelector("#btn__chronologie");
const chronologieText = document.querySelector(".chronologie__text");
console.log(chronologieText);
btnChronologie.addEventListener("click", () => {
  chronologieText.classList.toggle("block");
});
