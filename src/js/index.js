const navigation = document.querySelector(".navigation");
const hamburgerMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");

const toggleMenu = (isOpen) => {
  navigation.style.top = isOpen ? "7.2rem" : "-100rem";
  hamburgerMenu.style.display = isOpen ? "none" : "block";
  closeMenu.style.display = isOpen ? "block" : "none";
};

hamburgerMenu.addEventListener("click", () => toggleMenu(true));
closeMenu.addEventListener("click", () => toggleMenu(false));
