const adminIcon = document.querySelector(".grid__icon.grid__icon1");
const adminText = document.querySelector("#admin");
const transportIcon = document.querySelector(".grid__icon.grid__icon2");
const transportText = document.querySelector("#transport");
const healthIcon = document.querySelector(".grid__icon.grid__icon3");
const healthText = document.querySelector("#health");
const teachIcon = document.querySelector(".grid__icon.grid__icon4");
const teachText = document.querySelector("#teach");
const socialIcon = document.querySelector(".grid__icon.grid__icon5");
const socialText = document.querySelector("#social");
const publicMarketIcon = document.querySelector(".grid__icon.grid__icon6");
const publicMarketText = document.querySelector("#publicMarket");
const init = document.querySelector("#init");

const eventContent = (bloc, text) => {
  bloc.addEventListener("click", () => {
    init.innerHTML = "";
    init.appendChild(text);
    text.style.display = "block";
  });
};

eventContent(adminIcon, adminText);
eventContent(transportIcon, transportText);
eventContent(healthIcon, healthText);
eventContent(teachIcon, teachText);
eventContent(socialIcon, socialText);
eventContent(publicMarketIcon, publicMarketText);

const menuSelector1 = document.querySelector("#formalitySelect");
const menuSelector2 = document.querySelector("#transportSelect");
const menuSelector3 = document.querySelector("#teachSelect");
const menuSelector4 = document.querySelector("#socialSelect");

const eventSelect = (select) => {
  select.addEventListener("change", (event) => {
    window.location.assign(event.target.value);
  });
};

eventSelect(menuSelector1);
eventSelect(menuSelector2);
eventSelect(menuSelector3);
eventSelect(menuSelector4);