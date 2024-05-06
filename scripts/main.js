const burgerTrigger = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger__content");
const burgerLinks = document.querySelectorAll(".burger__content a");

const toggleBurger = () => {
  burgerTrigger.classList.toggle("opened");
  burgerContent.classList.toggle("opened");
  document.body.classList.toggle("menu-is-opened");
}

burgerTrigger.onclick = toggleBurger;
burgerLinks.forEach(item => item.onclick = toggleBurger);