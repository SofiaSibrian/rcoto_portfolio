import "./styles/styles.scss";

// =====================================================
// NABVAR===============================================
// =====================================================

// Grab list, item, link
const list = document.querySelector(".navigation__list");
const items = document.querySelectorAll(".navigation__item");
const links = document.querySelectorAll(".navigation__link");
const nav_btn = document.querySelector(".navigation__button");

const active_list = "navigation__active-list";
const active_item = "navigation__active-item";
const active_link = "navigation__active-link";
const hide = "hide";

// Will add the class hide to navigation__nav

nav_btn.addEventListener("click", () => {
  // Single element
  list.classList.toggle(active_list);
  list.classList.toggle(hide);
  // multiple elements
  items.forEach(item => item.classList.toggle(active_item));
  links.forEach(link => link.classList.toggle(active_link));
});
