const navigation = document.querySelector(".navigation");
const navigationList = document.querySelector(".navigation__list").children;
const hamburgerMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");
const overlay = document.querySelector(".overlay");

const toggleMenu = () => {
  hamburgerMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

const closeNavigation = () => {
  navigation.style.top = "-100%";
  toggleMenu();
  overlay.style = "opacity: 0; visibility: hidden";
};

hamburgerMenu.addEventListener("click", () => {
  navigation.style.top = "7.2rem";
  toggleMenu();
  setTimeout(() => {
    overlay.style = "opacity: 1; visibility: visible";
  }, 300);
});

closeMenu.addEventListener("click", () => closeNavigation());
overlay.addEventListener("click", () => closeNavigation());
window.addEventListener("scroll", () => closeNavigation());

for (let menu of navigationList) {
  menu.addEventListener("click", () => closeNavigation());
}
