const navigation = document.querySelector(".navigation");
const hamburgerMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");

const toggleMenu = () => {
  hamburgerMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

hamburgerMenu.addEventListener("click", () => {
  navigation.style.top = "7.2rem";
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  navigation.style.top = "-100%";
  toggleMenu();
});
