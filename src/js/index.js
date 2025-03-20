const navigation = document.querySelector(".navigation");
const navigationList = document.querySelector(".navigation__list").children;
const hamburgerMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");
const overlay = document.querySelector(".overlay");

const checkbox = document.querySelector(".switch input");
const monthly = document.querySelector(".prices__select--month");
const yearly = document.querySelector(".prices__select--year");

const [basic, pro, business] = document.getElementsByClassName("prices__value");
const pricesPeriod = document.getElementsByClassName("prices__period");

checkbox.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    monthly.style.opacity = 0.6;
    yearly.style.opacity = 1;

    [basic.textContent, pro.textContent, business.textContent] = [
      "$190.00",
      "$390.00",
      "$990.00",
    ];
    for (let period of pricesPeriod) {
      period.textContent = "per year";
    }
  } else {
    monthly.style.opacity = 1;
    yearly.style.opacity = 0.6;
    [basic.textContent, pro.textContent, business.textContent] = [
      "$19.00",
      "$39.00",
      "$99.00",
    ];
    for (let period of pricesPeriod) {
      period.textContent = "per month";
    }
  }
});

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
