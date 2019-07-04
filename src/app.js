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

// =====================================================
// Observers============================================
// =====================================================
const nav = document.querySelector("#navigation");
const header = document.querySelector("#header");
const qualifications = document.querySelector("#qualifications");
const portfolio = document.querySelector("#portfolio");
const accomplishments = document.querySelector("#accomplishments");
const about = document.querySelector("#about");
const footer = document.querySelector("#footer");

const navHome = document.querySelector("#nav-home");
const navQuad = document.querySelector("#nav-qualifications");
const navPort = document.querySelector("#nav-portfolio");
const navAcc = document.querySelector("#nav-accomplishments");
const navContact = document.querySelector("#nav-about");

const navHightlight = (element, link) => {
  const navOpt = {};
  const navObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Out of section
        link.classList.remove("selected");
      } else {
        // In section
        link.classList.add("selected");
      }
    });
  }, navOpt);

  navObserver.observe(element);
};

navHightlight(header, navHome);
navHightlight(qualifications, navQuad);
navHightlight(portfolio, navPort);
navHightlight(accomplishments, navAcc);
navHightlight(about, navContact);
